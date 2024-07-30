import {
  useEffect
} from 'react';


export const DrawingActionKind = {
  SET_OVERLAY: 'SET_OVERLAY',
  UPDATE_OVERLAYS: 'UPDATE_OVERLAYS',
  CANCEL_OVERLAY: 'CANCEL_OVERLAY'
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
  case DrawingActionKind.UPDATE_OVERLAYS: {
    const {
      polyline 
    } = state;

    const path = polyline.getPath()?.getArray();

    state.polygon.setPaths(path);

    return {
      polyline,
      polygon: state.polygon
    }
  }

  // This action is called when a new overlay is added to the map.
  case DrawingActionKind.SET_OVERLAY: {

    const {
      overlay: polyline
    } = action.payload;


    const path = polyline.getPath()?.getArray();

    // because we cannot draw a polilyne with a fill color, and we cannot draw a polygon with  
    // dotted line stroke, the decision has been made to draw a polilyne for the stroke, and a polygon
    // for the fill color
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

    return {
      polyline,
      polygon
    }
  }

  // This action is called when the cancel button is clicked.
  case DrawingActionKind.CANCEL_OVERLAY: {
    return {
      polyline: null,
      polygon: null
    }
  }
  }
}

// TODO: cambiarle nombre a useDrawedOverlays
export function useOverlaySnapshots(map, state) {
  useEffect(() => {
    if (!map || !state.polyline) return;

    state.polyline.setMap(map)
    state.polygon.setMap(map)

    return () => {
      state.polyline.setMap(null)
      state.polygon.setMap(null)
    }
  }, [map, state.polyline]);

}
