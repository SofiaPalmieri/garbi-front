import {
  useEffect 
} from 'react';


export const DrawingActionKind = {
  SET_OVERLAY: 'SET_OVERLAY',
  UPDATE_OVERLAYS: 'UPDATE_OVERLAYS',
  UNDO: 'UNDO',
  REDO: 'REDO'
}

function getPathsAsLatLngArray(overlays) {
  return overlays.map(overlay => {
    if (overlay.getPath) {
      return overlay.getPath().getArray()
        .map(latlng => ({
          lat: latlng.lat(),
          lng: latlng.lng()
        }));
    } else {
      return [];
    }
  });
}

export default function reducer(state, action) {
  switch (action.type) {
  // This action is called whenever anything changes on any overlay.
  // We then take a snapshot of the relevant values of each overlay and
  // save them as the new "now". The old "now" is added to the "past" stack
  case DrawingActionKind.UPDATE_OVERLAYS: {
    const overlays = state.now.map((overlay) => {
      const snapshot = {
      };
      const {
        geometry 
      } = overlay;

      snapshot.path = geometry.getPath()?.getArray();

      return {
        ...overlay,
        snapshot
      };
    });

    return {
      now: [...overlays],
      past: [...state.past, state.now],
      future: []
    };
  }

  // This action is called when a new overlay is added to the map.
  // We then take a snapshot of the relevant values of the new overlay and
  // add it to the "now" state. The old "now" is added to the "past" stack
  case DrawingActionKind.SET_OVERLAY: {
    const {
      overlay 
    } = action.payload;

    const snapshot = {
    };

    snapshot.path = overlay.getPath()?.getArray();
    let polygonOverlay = null;
    if (action.payload.type === google.maps.drawing.OverlayType.POLYLINE) {
      polygonOverlay = new google.maps.Polygon({
        paths: snapshot.path,
        editable: false,
        draggable: false,
        strokeOpacity: 0,
        fillColor: '#006610',
        fillOpacity: 0.10,
      });
    }

    return {
      past: [...state.past, state.now],
      now: [
        {
          type: action.payload.type,
          geometry: action.payload.overlay,
          snapshot
        },
        polygonOverlay ? {
          type: google.maps.drawing.OverlayType.POLYGON,
          geometry: polygonOverlay,
          snapshot: {
            path: polygonOverlay.getPaths().getArray() 
          }
        } : null
      ].filter(Boolean),
      future: []
    };
  }

  // This action is called when the undo button is clicked.
  // Get the top item from the "past" stack and set it as the new "now".
  // Add the old "now" to the "future" stack to enable redo functionality
  case DrawingActionKind.UNDO: {
    const last = state.past.slice(-1)[0];

    if (!last) return state;

    return {
      past: [...state.past].slice(0, -1),
      now: last,
      future: state.now ? [...state.future, state.now] : state.future
    };
  }

  // This action is called when the redo button is clicked.
  // Get the top item from the "future" stack and set it as the new "now".
  // Add the old "now" to the "past" stack to enable undo functionality
  case DrawingActionKind.REDO: {
    const next = state.future.slice(-1)[0];

    if (!next) return state;

    return {
      past: state.now ? [...state.past, state.now] : state.past,
      now: next,
      future: [...state.future].slice(0, -1)
    };
  }
  }
}


export function useDrawingManagerEvents(drawingManager, overlaysShouldUpdateRef, dispatch) {
  useEffect(() => {
    if (!drawingManager) return;

    const eventListeners = [];

    const addUpdateListener = (eventName, drawResult) => {
      const updateListener = google.maps.event.addListener(
        drawResult.overlay,
        eventName,
        () => {
          if (eventName === 'dragstart') {
            overlaysShouldUpdateRef.current = false;
          }

          if (eventName === 'dragend') {
            overlaysShouldUpdateRef.current = true;
          }

          if (overlaysShouldUpdateRef.current) {
            dispatch({
              type: DrawingActionKind.UPDATE_OVERLAYS 
            });
          }
        }
      );

      eventListeners.push(updateListener);
    };

    const overlayCompleteListener = google.maps.event.addListener(
      drawingManager,
      'overlaycomplete',
      (drawResult) => {
        switch (drawResult.type) {
        case google.maps.drawing.OverlayType.POLYGON:
        case google.maps.drawing.OverlayType.POLYLINE:
          ['mouseup'].forEach(eventName =>
            addUpdateListener(eventName, drawResult)
          );
          break;

        default:
          break;
        }

        dispatch({
          type: DrawingActionKind.SET_OVERLAY,
          payload: drawResult 
        });
      }
    );

    eventListeners.push(overlayCompleteListener);

    return () => {
      eventListeners.forEach(listener =>
        google.maps.event.removeListener(listener)
      );
    };
  }, [dispatch, drawingManager, overlaysShouldUpdateRef]);
}

export function useOverlaySnapshots(map, state, overlaysShouldUpdateRef) {
  useEffect(() => {
    if (!map || !state.now) return;

    for (const overlay of state.now) {
      overlaysShouldUpdateRef.current = false;

      overlay.geometry.setMap(map);

      const {
        path 
      } = overlay.snapshot;

      overlay.geometry.setPath(path ?? []);

      overlaysShouldUpdateRef.current = true;
    }

    return () => {
      for (const overlay of state.now) {
        overlay.geometry.setMap(null);
      }
    };
  }, [map, overlaysShouldUpdateRef, state.now]);
}
