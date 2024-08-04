import {
  ControlPosition, Map,
  MapControl
} from '@vis.gl/react-google-maps';
import {
  useEffect, useReducer, useState 
} from 'react';
import {
  PanelControlMap 
} from '../PanelControlMap/PanelControlMap';


import {
  useDrawingManager 
} from '../../hooks/useDrawingManager';
import reducer from '../UndoRedoControl/reducer';

export const AreaDrawingMap = ({
  areas, setAreas, canAddArea, setCanAddArea 
}) => {
  const [state, dispatch] = useReducer(reducer, []);
  const drawingManager = useDrawingManager('garbi-create-area-map', canAddArea);
  const [areaSelected, setAreaSelected] = useState(null)

  const position = {
    lat: -34.5893,
    lng: -58.3974,
  };

  useEffect(() => {
    if (areaSelected) {  
      if (areaSelected.polygon) {
        areaSelected.polygon.setOptions({
          fillOpacity: 0.8,
          fillColor: areaSelected.color
        });
      }
    }
    return () => {
      state.forEach(area => area.polygon.setOptions({
        fillOpacity: 0.1 
      }))
    }
  }, [areaSelected]);


  return (
    <>
      <Map
        defaultZoom={12}
        defaultCenter={position}
        mapId='658a52589c7a963'
        id='garbi-create-area-map'
        disableDefaultUI
        disableDoubleClickZoom
      >
        {/* {canAddArea && (<MapControl
          position={ControlPosition.TOP_CENTER}
        >
          <UndoRedoControl
            drawingManager={drawingManager}
          />
        </MapControl>)
        } */}
        <MapControl
          position={ControlPosition.TOP_RIGHT}
        >
          <PanelControlMap
            areaSelected={areaSelected}
            canAddArea={canAddArea}
            setCanAddArea={setCanAddArea}
            areas={areas}
            state = {state}
            dispatch = {dispatch}
            setAreas={setAreas}
            drawingManager={drawingManager}
            setAreaSelected={setAreaSelected}
          />
        </MapControl>
      </Map>

    </>
  )
}
