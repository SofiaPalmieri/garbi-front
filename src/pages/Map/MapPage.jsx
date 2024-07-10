import {
  APIProvider, Map, AdvancedMarker 
} from '@vis.gl/react-google-maps';
import {
  trees 
} from '/src/data.js';
import {
  redTrees 
} from '../../data';
import CircleIcon from '@mui/icons-material/Circle';

const MapPage = () => {
  const position = {
    lat: 43.64,
    lng: -79.41,
  };

  return (
    <div
      style={{
        width: '100%',
        height: '85vh',
        backgroundColor: 'white',
        overflowX: 'hidden',
      }}
    >
      <APIProvider
        apiKey='AIzaSyChdsbPNc69MyOgPRQf8o2_5kMUFDx2zMM'
      >
        <div
          style={{
            paddingLeft: '350px',
            paddingRight: '100px',
            paddingBottom: '5px',
            paddingTop: '70px',
            width: '85%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            overflowX: 'hidden',
          }}
        >
          <Map
            defaultZoom={9}
            defaultCenter={position}
            mapId='658a52589c7a963'
          >
            <Markers
              trees={trees}
            />
            <RedMarkers
              redTrees={redTrees}
            />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

function Markers(props) {
  const {
    trees 
  } = props;

  return (
    <>
      {trees.map((p) => (
        <AdvancedMarker
          position={p}
          key={p.key}
        >
          <div
            style={{
              width: '50px',
              height: '20px',
            }}
          >
            <CircleIcon
              sx={{
                color: '#EF6C00',
              }}
            />
          </div>
        </AdvancedMarker>
      ))}
    </>
  );
}

function RedMarkers(props) {
  const {
    redTrees 
  } = props;

  return (
    <>
      {redTrees.map((p) => (
        <AdvancedMarker
          position={p}
          key={p.key}
        >
          <div
            style={{
              width: '50px',
              height: '20px',
            }}
          >
            <CircleIcon
              sx={{
                color: '#D32F2F',
              }}
            />
          </div>
        </AdvancedMarker>
      ))}
    </>
  );
}

export default MapPage;
