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
    console.log('🚀 ~ reducer ~ action.payload:', action.payload)

    const {
      overlay: polyline
    } = action.payload;
      

    // const snapshot = {
    // };

    const path = polyline.getPath()?.getArray();
    let polygon = null;
    if (action.payload.type === google.maps.drawing.OverlayType.POLYLINE) {
      polygon = new google.maps.Polygon({
        paths: path,
        editable: false,
        draggable: false,
        strokeOpacity: 0,
        fillColor: '#006610',
        fillOpacity: 0.10,
      });
    }

    // return {
    //   past: [...state.past, state.now],
    //   now: [
    //     {
    //       type: action.payload.type,
    //       geometry: action.payload.overlay,
    //       snapshot
    //     },
    //     polygonOverlay ? {
    //       type: google.maps.drawing.OverlayType.POLYGON,
    //       geometry: polygonOverlay,
    //       snapshot: {
    //         path: polygonOverlay.getPaths().getArray() 
    //       }
    //     } : null
    //   ].filter(Boolean),
    //   future: []
    // };
    return {
      polyline,
      polygon
    }
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


export function useOverlaySnapshots(map, state) {
  useEffect(() => {
    if (!map || !state.polyline) return;

    console.log('🚀 ~ useEffect ~ state:', state)

    state.polyline.setMap(map)
    state.polygon.setMap(map)


    // for (const overlay of state.now) {
    //   overlaysShouldUpdateRef.current = false;

    //   overlay.geometry.setMap(map);

    //   const {
    //     path 
    //   } = overlay.snapshot;

    //   overlay.geometry.setPath(path ?? []);

    //   overlaysShouldUpdateRef.current = true;
    // }

    // return () => {
    //   for (const overlay of state.now) {
    //     overlay.geometry.setMap(null);
    //   }
    // };
    return () => {
      state.polyline.setMap(null)
      state.polygon.setMap(null)
    }
  }, [map, state.polyline]);
  
}
