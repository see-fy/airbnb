import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map( { long, lat }) {
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11
  });
  return ( 
    <MapGL
      style={{ width: '100%', height: '400px' }}
      mapStyle='mapbox://styles/tahmaris/cl1fiyo7a008c14s9q4xfui1u'
      accessToken={process.env.accessToken}
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      onViewportChange={setViewport}
    />
  );
}
export default Map;
