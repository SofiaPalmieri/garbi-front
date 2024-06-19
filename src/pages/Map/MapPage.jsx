import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import { trees } from '/src/data.js'
import { redTrees } from '../../data';
import CircleIcon from '@mui/icons-material/Circle';


const MapPage = () => {
  const position = { lat: 43.64, lng: -79.41 }
  console.log(trees)

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      <APIProvider apiKey='AIzaSyChdsbPNc69MyOgPRQf8o2_5kMUFDx2zMM'>
        <div style={{ paddingLeft: '350px', paddingRight:"100px", paddingBottom:'5px', paddingTop:"70px", width: '80%', height: '80%', display:"flex", alignItems:"center" }}>
          <Map defaultZoom={9} defaultCenter={position} mapId='658a52589c7a963'>
            <Markers trees={trees}></Markers>
            <RedMarkers redTrees={redTrees}></RedMarkers>
          </Map>
        </div>
      </APIProvider>
    </div>
  )
}

function Markers(props) {
  const { trees } = props

  return <>
    {
      trees.map(p => (
        <AdvancedMarker position={p} key={p.key}>
          <div style={{width:'50px', height: '20px'}}>
            <CircleIcon sx={{color:"#EF6C00"}}></CircleIcon>
          </div>
        </AdvancedMarker>
      ))
    }
  </>

}

function RedMarkers(props) {
  const { redTrees } = props

  return <>
    {
      redTrees.map(p => (
        <AdvancedMarker position={p} key={p.key}>
          <div style={{width:'50px', height: '20px'}}>
            <CircleIcon sx={{color:"#D32F2F"}}></CircleIcon>
          </div>
        </AdvancedMarker>
      ))
    }
  </>

}

export default MapPage
