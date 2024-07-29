import {
  useReducer
} from 'react';
import {
  useMap
} from '@vis.gl/react-google-maps';
import CloseIcon from '@mui/icons-material/Close';

import reducer, {
  DrawingActionKind,
  useOverlaySnapshots
} from './undo-rendo';
import {
  useDrawingManagerEvents 
} from './useDrawingManagerEvents';


export const UndoRedoControl = ({
  drawingManager
}) => {

  const map = useMap('garbi-create-area-map');

  const [state, dispatch] = useReducer(reducer, {
    polygon: null,
    polyline: null
  });

  useDrawingManagerEvents(drawingManager, dispatch);
  useOverlaySnapshots(map, state);

  return (
    <div
      className='drawing-history'
      style={{
        marginTop: '4px'
      }}
    >
      <button
        onClick={() => dispatch({
          type: DrawingActionKind.REDO
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