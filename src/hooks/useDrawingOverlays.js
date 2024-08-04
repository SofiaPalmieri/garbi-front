import {
  useEffect 
} from 'react';

export function useDrawingOverlays(map, state) {
  useEffect(() => {
    if (!map || !state) return;
  
    state.forEach(area => {
      area.polyline.setMap(map)
      area.polygon.setMap(map)
    })
  
    return () => {
      state.map(area => {
        area.polyline.setMap(null)
        area.polygon.setMap(null)
      })
    }
  }, [map, state]);
    
  
}
  