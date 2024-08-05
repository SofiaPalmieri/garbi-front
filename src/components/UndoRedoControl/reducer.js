import {
  polygonConfig, polylineConfig 
} from '../AreaDrawingMap/drawAreas';

export const DrawingActionKind = {
  SET_OVERLAY: 'SET_OVERLAY',
  UPDATE_OVERLAYS: 'UPDATE_OVERLAYS',
  CANCEL_OVERLAY: 'CANCEL_OVERLAY',
  INIT_OVERLAYS: 'INIT_OVERLAYS',
  CLICK_OVERLAY: 'CLICK_OVERLAY',
  DELETE_OVERLAY: 'DELETE_OVERLAY'
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

function getPathsAsLatLng(overlay) {
  if (overlay.getPath) {
    return overlay
      .getPath()
      .getArray()
      .map(latlng => ({
        lat: latlng.lat(),
        lng: latlng.lng()
      }))
  }
}

export default function reducer(state, action) {
  switch (action.type) {

  case DrawingActionKind.INIT_OVERLAYS: {
    const {
      areas 
    } = action.payload;

    // paint
    const overlaysFormated = areas.map(area => {
      const polygon = new google.maps.Polygon({
        paths: area.path,
        ...polygonConfig,
      });
      const polyline = new google.maps.Polyline({
        strokeColor: area.color,
        editable: false,
        ...polylineConfig,
        path: area.path,
      });

      return {
        ...area,
        polyline,
        polygon
      }
    })

    return [...overlaysFormated]
  }

  // This action is called whenever anything changes on any overlay.
  case DrawingActionKind.UPDATE_OVERLAYS: {
    const {
      id 
    } = action.payload;
    console.log('🚀 ~ reducer ~ id:', id)

    const area = state.find(overlay => overlay.id === id);
    console.log('🚀 ~ reducer ~ area:', area)
      
    
      
    const path = area.polyline.getPath()?.getArray();
    
    if (path) {
      area.polygon.setPaths(path);
    }
    
      
    return [...state];
  }

  case DrawingActionKind.DELETE_OVERLAY: {
    const {
      id 
    } = action.payload;

    const newState = state.filter(area => area.id != id)
  
    // TODO LLAMAR AL BE

    return [...newState];
  }
    

  // This action is called when a new overlay is added to the map.
  case DrawingActionKind.SET_OVERLAY: {
    const {
      overlay: polyline
    } = action.payload;

    const path = polyline.getPath()?.getArray();
    const arrayPath = getPathsAsLatLng(polyline)

    // because we cannot draw a polilyne with a fill color, and we cannot draw a polygon with  
    // dotted line stroke, the decision has been made to draw a polilyne for the stroke, and a polygon
    // for the fill color
    let polygon = null;

    if (action.payload.type === google.maps.drawing.OverlayType.POLYLINE) {
      polygon = new google.maps.Polygon({
        paths: arrayPath,
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

