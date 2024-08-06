import {
  polygonConfig 
} from '../components/AreaDrawingMap/drawAreas';

export const DrawingActionType = {
  SET_DRAW: 'SET_OVERLAY',
  UPDATE_DRAW: 'UPDATE_OVERLAYS',
  // CANCEL_OVERLAY: 'CANCEL_OVERLAY',
  // INIT_OVERLAYS: 'INIT_OVERLAYS',
  // CLICK_OVERLAY: 'CLICK_OVERLAY',
  // DELETE_OVERLAY: 'DELETE_OVERLAY'
}




export function drawReducer(state, action) {
  switch (action.type) {
  case DrawingActionType.SET_DRAW: {

    const {
      overlay: polyline
    } = action.payload
    console.log('🚀 ~ drawReducer ~ action.payload:', action.payload)
    console.log('🚀 ~ drawReducer ~ polyline:', polyline)

    const path = polyline.getPath()?.getArray();
    console.log('🚀 ~ drawReducer ~ path:', path)

    path.forEach(p => console.log(p.lat(), p.lng()))

    completePath(path, polyline);

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

        // TODO: EDIT DRAW
  }

}

function completePath(path, polyline) {
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
