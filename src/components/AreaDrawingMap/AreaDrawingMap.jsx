import {
  ControlPosition, Map,
  MapControl
} from '@vis.gl/react-google-maps';
import {
  useDrawingManager 
} from '../../hooks/useDrawingManager';
import {
  UndoRedoControl 
} from '../UndoRedoControl';

export const AreaDrawingMap = () => {


  const position = {
    lat: -34.5893,
    lng: -58.3974,
  };
  const drawingManager = useDrawingManager('garbi-create-area-map');

  return (

    <>
      <Map
        defaultZoom={12}
        defaultCenter={position}
        mapId='658a52589c7a963'
        id='garbi-create-area-map'
        disableDefaultUI
      >
        <MapControl
          position={ControlPosition.TOP_CENTER}
        >
          <UndoRedoControl
            drawingManager={drawingManager}
          />
        </MapControl>
      </Map>

    </>
  )
}
