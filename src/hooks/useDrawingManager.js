import {
  useMap, useMapsLibrary 
} from '@vis.gl/react-google-maps';
import {
  useEffect, useState 
} from 'react';
import {
  polylineConfig 
} from '../components/AreaDrawingMap/drawAreas';


export const useDrawingManager = (id = null, canAddArea = true) => {
  const map = useMap(id);
  const drawing = useMapsLibrary('drawing');

  const [drawingManager, setDrawingManager] = useState(null);

  useEffect(() => {
    if (!map || !drawing || !canAddArea) return;

    // https://developers.google.com/maps/documentation/javascript/reference/drawing
    const newDrawingManager = new drawing.DrawingManager({
      map,
      drawingMode: google.maps.drawing.OverlayType.POLYLINE,
      drawingControl: canAddArea,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYLINE,
        ]
      },
      polylineOptions: {
        editable: true,
        draggable: false,
        ...polylineConfig
      }
    });

    setDrawingManager(newDrawingManager);

    return () => {
      newDrawingManager.setMap(null);
    };
  }, [drawing, map, canAddArea]);

  return drawingManager;
}