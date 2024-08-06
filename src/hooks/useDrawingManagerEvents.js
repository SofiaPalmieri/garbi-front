import {
  useEffect
} from 'react';
import {
  DrawingActionKind
} from '../components/UndoRedoControl/reducer';
import {
  DrawingActionType 
} from '../reducers/drawReducer';


export function useDrawingManagerEvents(drawingManager, dispatch, dispatchDraw, state, areaSelected, setAreaSelected) {
  useEffect(() => {
    if (!drawingManager) return;

    const eventListeners = [];

    const addUpdateListener = (eventName, overlay) => {
      console.log('🚀 ~ addUpdateListener ~ overlay:', overlay)
      const updateListener = google.maps.event.addListener(
        overlay.polyline,
        eventName,
        () => {
          dispatch({
            type: DrawingActionKind.UPDATE_OVERLAYS,
            payload: {
              id: overlay.id
            }
          });
        }
      );

      eventListeners.push(updateListener);
    };

    const addUpdateListenerOverlay = (eventName, overlay) => {
      const updateListener = google.maps.event.addListener(
        overlay,
        eventName,
        () => {
          dispatch({
            type: DrawingActionType.UPDATE_OVERLAYS,
            payload: overlay
          });
        }
      );

      eventListeners.push(updateListener);
    };

    const addClickListener = (overlay) => {
      const clickListener = google.maps.event.addListener(
        overlay.polygon,
        'click',
        () => {
          setAreaSelected(prev => prev && prev.id === overlay.id ? null : overlay);
        }
      );

      eventListeners.push(clickListener);
    };

    state.forEach(overlay => {
      ['mouseup'].forEach(eventName =>
        addUpdateListener(eventName, overlay)
      );
      addClickListener(overlay);
    });

    const overlayCompleteListener = google.maps.event.addListener(
      drawingManager,
      'overlaycomplete',
      (drawResult) => {
        if (google.maps.drawing.OverlayType.POLYLINE) {
          ['mouseup'].forEach(eventName =>
            addUpdateListenerOverlay(eventName, drawResult)
          );
        }
        drawingManager.setDrawingMode(null)
        dispatchDraw({
          type: DrawingActionType.SET_DRAW,
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
  }, [dispatch, drawingManager, state]);
}