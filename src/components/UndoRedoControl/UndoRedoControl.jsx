import {
  useReducer
} from 'react';
import {
  useMap
} from '@vis.gl/react-google-maps';
import CloseIcon from '@mui/icons-material/Close';
import {
  useDrawingManagerEvents 
} from '../../hooks/useDrawingManagerEvents';
import {
  useDrawingOverlays 
} from '../../hooks/useDrawingOverlays';
import reducer, {
  DrawingActionKind 
} from './reducer';


export const UndoRedoControl = ({
  drawingManager
}) => {

  const map = useMap('garbi-create-area-map');

  const [state, dispatch] = useReducer(reducer, {
    polygon: null,
    polyline: null
  });

  useDrawingManagerEvents(drawingManager, dispatch);
  useDrawingOverlays(map, state);

  return (
    <div
      className='drawing-history'
      style={{
        marginTop: '4px'
      }}
    >
      <button
        onClick={() => dispatch({
          type: DrawingActionKind.CANCEL_OVERLAY
        })}
        disabled={!state.polygon && !state.polyline}
      >
        <CloseIcon
          sx={{
            fontSize: '21px' 
          }}
        />
      </button>
    </div>
  );
};