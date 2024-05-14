import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import { trees } from '/src/data.js'


const MapPage = () => {
  const position = { lat: 43.64, lng: -79.41 }
  console.log(trees)

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      <APIProvider apiKey=''>
        <div style={{ paddingLeft: '350px', paddingBottom:'5px', width: '100%', height: '70%' }}>
          <Map defaultZoom={9} defaultCenter={position} mapId='658a52589c7a963'>
            <Markers trees={trees}></Markers>
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
            <img style={{width: '100%'}}  src='/src/assets/waste.png'></img>
          </div>
        </AdvancedMarker>
      ))
    }
  </>

}

export default MapPage
