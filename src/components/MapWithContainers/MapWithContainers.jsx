import {
  APIProvider, Map
} from '@vis.gl/react-google-maps';

export const MapWithContainers = ({
  apiKey, zoom, centerPosition, containers
}) => {
  return (
    <APIProvider
      apiKey={apiKey}
    >
      <Map
        defaultZoom={zoom}
        defaultCenter={centerPosition}
        mapId='658a52589c7a963'
        streetViewControl={false}
        mapTypeControl={false}
        zoomControl={false}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        id='garbi-home-map'
        style={{
          outline: 'none',
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        {containers}
      </Map>
    </APIProvider>
  );
};
