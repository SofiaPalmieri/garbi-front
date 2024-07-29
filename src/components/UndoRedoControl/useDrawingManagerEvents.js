import {
  useEffect 
} from 'react';
import {
  DrawingActionKind 
} from './undo-rendo';

export function useDrawingManagerEvents(drawingManager, dispatch) {
  useEffect(() => {
    if (!drawingManager) return;
  
    const eventListeners = [];
  
    const addUpdateListener = (eventName, drawResult) => {
      const updateListener = google.maps.event.addListener(
        drawResult.overlay,
        eventName,
        () => {
          dispatch({
            type: DrawingActionKind.UPDATE_OVERLAYS 
          });
        }
      );
  
      eventListeners.push(updateListener);
    };
  
    const overlayCompleteListener = google.maps.event.addListener(
      drawingManager,
      'overlaycomplete',
      (drawResult) => {
        if(google.maps.drawing.OverlayType.POLYLINE){
          ['mouseup'].forEach(eventName =>
            addUpdateListener(eventName, drawResult)
          );
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
  }, [dispatch, drawingManager]);
}