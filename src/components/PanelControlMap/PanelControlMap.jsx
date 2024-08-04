import {
  Box, Fab 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {
  useEffect, useState 
} from 'react';
import {
  useMap 
} from '@vis.gl/react-google-maps';
import {
  DrawingActionKind 
} from '../UndoRedoControl/reducer';
import {
  useDrawingManagerEvents 
} from '../../hooks/useDrawingManagerEvents';
import {
  useDrawingOverlays 
} from '../../hooks/useDrawingOverlays';

const areasDefault = [
  {   
    id:1,
    title: 'area 1',
    color: '#006610',
    path: [
      {
        'lat': -34.592974210775964,
        'lng': -58.53266916503906
      },
      {
        'lat': -34.55254895697824,
        'lng': -58.50897989501953
      },
      {
        'lat': -34.583081734691056,
        'lng': -58.41010294189453
      },
      {
        'lat': -34.592974210775964,
        'lng': -58.53266916503906
      }
    ]
  },
  {
    id: 2,
    title: 'area 2',
    color: '#333',
    path: [

      {
        'lat': -34.647785430789106,
        'lng': -58.43207559814453
      },
      {
        'lat': -34.60314810025483,
        'lng': -58.370964147949216
      },
      {
        'lat': -34.64241892081793,
        'lng': -58.314315893554685
      },
      {
        'lat': -34.647785430789106,
        'lng': -58.43207559814453
      }
    ]

  }
]

export const PanelControlMap = ({
  areaSelected, canAddArea, setCanAddArea, areas, setAreas, drawingManager, setAreaSelected, state, dispatch
}) => {
  const map = useMap('garbi-create-area-map');
  const [isEditing, setIsEditing] = useState(false);
    
  useEffect(() => {
    dispatch({
      type: DrawingActionKind.INIT_OVERLAYS,
      payload: {
        areas: areasDefault 
      } 
    });
  }, []);


  useEffect(() =>{
    console.log('🚀 ~ PanelControlMap ~ state:', state)
  }, [state])

  
  useDrawingManagerEvents(drawingManager, dispatch, state, areaSelected, setAreaSelected)
  useDrawingOverlays(map, state)

  // useEffect(() => {
  //     setAreas(drawAreas(areasDefault, map))
  // }, [])

  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      <Fab
        color='secondary'
        aria-label='edit'
        size='small'
        disabled={!areaSelected}
        onClick={() => areaSelected.polyline.setOptions({
          editable: true 
        })}
      >
        <EditIcon />
      </Fab>
      <Fab
        color='secondary'
        aria-label='edit'
        size='small'
        disabled={!areaSelected}
      >
        <DeleteIcon />
      </Fab>
      <Fab
        color='secondary'
        aria-label='edit'
        size='small'
        disabled={canAddArea}
        onClick={() => setCanAddArea(true)}
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}
