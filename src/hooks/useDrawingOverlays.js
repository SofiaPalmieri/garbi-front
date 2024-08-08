import {
  useEffect 
} from 'react';

export function useDrawingOverlays(map, state) {
  useEffect(() => {
    if (!map || !state.polyline) return;
  
    state.polyline.setMap(map)
    state.polygon.setMap(map)
  
    return () => {
      state.polyline.setMap(null)
      state.polygon.setMap(null)
    }
  }, [map, state.polyline]);
  
}
  