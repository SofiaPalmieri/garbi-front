import {
  useMap, useMapsLibrary 
} from '@vis.gl/react-google-maps';
import {
  useEffect, useState 
} from 'react';

const lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 4,
};


export const useDrawingManager = (id = null) => {
  const map = useMap(id);
  const drawing = useMapsLibrary('drawing');

  const [drawingManager, setDrawingManager] = useState(null);

  useEffect(() => {
    if (!map || !drawing) return;

    // https://developers.google.com/maps/documentation/javascript/reference/drawing
    const newDrawingManager = new drawing.DrawingManager({
      map,
      drawingMode: google.maps.drawing.OverlayType.POLYLINE,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYLINE,
        ]
      },
      polylineOptions: {
        editable: true,
        draggable: false,
        strokeColor: '#006610',
        strokeOpacity: 0.5,
        strokeWeight: 3,
        icons: [
          {
            icon: lineSymbol,
            offset: '0',
            repeat: '20px',
          },
        ],
      }
    });

    setDrawingManager(newDrawingManager);

    return () => {
      newDrawingManager.setMap(null);
    };
  }, [drawing, map]);

  return drawingManager;
}