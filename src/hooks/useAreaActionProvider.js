import {
  useState 
} from 'react';

export const useAreaActionStatesProvider = () => {
  const [enabledAddArea, setEnabledAddArea] = useState(true);
  const [enabledEditArea, setEnableEditArea] = useState(false);
  const [enabledDeleteArea, setEnabledDeleteArea] = useState(false);

  const [isAddingArea, setIsAddingArea] = useState(false);

  const enableAddArea = () => {
    setEnabledAddArea(true)
    setEnabledDeleteArea(false);
    setEnableEditArea(false);
  }
    
  const enableEditArea = () => {
    setEnableEditArea(true)
    setEnabledAddArea(false)
    setEnabledDeleteArea(true)
  }

  const addingArea = () => {
    console.log('adsklsadklsad')
    setIsAddingArea(true)
    setEnabledAddArea(false)
    setEnabledDeleteArea(false);
    setEnableEditArea(false);
  }

  const disableEditArea = () =>{
    setEnableEditArea(false)
    setEnabledAddArea(true)
    setEnabledDeleteArea(false)
  }

  const resetStates = () => {
    setEnableEditArea(true)
    setEnableEditArea(false)
    setEnabledDeleteArea(false)
  }

    
  return {
    areaActionStates: {
      enableAddArea,
      enableEditArea,
      isAddingArea,
      addingArea,
      enabledAddArea,
      enabledEditArea,
      enabledDeleteArea,
      disableEditArea,
      resetStates
    }
  }
}