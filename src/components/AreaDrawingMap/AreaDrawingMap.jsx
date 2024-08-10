import {
  ControlPosition, Map,
  MapControl
} from '@vis.gl/react-google-maps';
import {
  useEffect,
  useState
} from 'react';
import {
  PanelControlMap
} from '../PanelControlMap/PanelControlMap';
import {
  useDrawingManager
} from '../../hooks/useDrawingManager';
import ColorPicker from '../ColorPicker/ColorPicker';





export const AreaDrawingMap = ({
  areas, setAreas, canAddArea, setCanAddArea, areaSelected, setAreaSelected, state, dispatch, stateDraw, dispatchDraw
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const drawingManager = useDrawingManager('garbi-create-area-map', selectedColor);
  
  useEffect(() => {
    if(drawingManager && selectedColor){
      drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYLINE)
    }
  }, [selectedColor, drawingManager])

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
        {canAddArea && (<MapControl
          position={ControlPosition.LEFT_TOP}
        >
          <ColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </MapControl>)}
        <MapControl
          position={ControlPosition.TOP_RIGHT}
        >
          <PanelControlMap
            areaSelected={areaSelected}
            canAddArea={canAddArea}
            setCanAddArea={setCanAddArea}
            dispatchDraw={dispatchDraw}
            areas={areas}
            state={state}
            stateDraw={stateDraw}
            dispatch={dispatch}
            setAreas={setAreas}
            drawingManager={drawingManager}
            setAreaSelected={setAreaSelected}
          />
        </MapControl>
      </Map>

    </>
  )
}
