import {
  polygonConfig
} from '../components/AreaDrawingMap/drawAreas';

export const DrawingActionType = {
  SET_DRAW: 'SET_DRAW',
  UPDATE_DRAW: 'UPDATE_DRAW',
  CLEAR_DRAW: 'CLEAR_DRAW'
}

export function drawReducer(state, action) {
  switch (action.type) {
  case DrawingActionType.SET_DRAW: {
    const {
      overlay: polyline
    } = action.payload

    completePath(polyline);

    const path = polyline.getPath()?.getArray();

    const polygon = new google.maps.Polygon({
      paths: path,
      ...polygonConfig,
      fillColor: polyline.strokeColor || '#FF0000',
    })

    return {
      polyline,
      polygon
    }
  }

  case DrawingActionType.UPDATE_DRAW: {
    completeEditablePath(state.polyline)

    const path = state.polyline.getPath()?.getArray();
    state.polygon.setPath(path)

    return state
  }

  case DrawingActionType.CLEAR_DRAW: {
    return {
      polyline: null,
      polygon: null
    }
  }
  }
}

// this func should be called every time we try to update a polyline
export function completeEditablePath(polyline) {
  const path = polyline.getPath()?.getArray();
  console.log('🚀 ~ completeEditablePath ~ path:', getPathsAsLatLng(polyline))

  if (path.length > 1) {
    path.forEach(p => console.log(p.lat(), p.lng()));

    const firstPoint = path[0];
    const lastPoint = path[path.length - 1];

    if (!firstPoint.equals(lastPoint)) {
      path.pop(path.length - 1)
      path[0] = lastPoint;
      path.push(lastPoint);
      console.log('🚀 ~ completeEditablePath ~ path:', path)
      polyline.setPath(path);
    }
  }
}

function completePath(polyline) {
  const path = polyline.getPath()?.getArray();

  if (path.length > 1) {
    path.forEach(p => console.log(p.lat(), p.lng()));

    const firstPoint = path[0];
    const lastPoint = path[path.length - 1];

    if (!firstPoint.equals(lastPoint)) {
      path.push(firstPoint);
      polyline.setPath(path);
    }
  }
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