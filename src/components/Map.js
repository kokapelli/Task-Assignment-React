import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../config';
import './Map.css';

mapboxgl.accessToken = config.apiKey;

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(17.6389);
  const [lat, setLat] = useState(59.8586);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div>
      <div className='map' ref={mapContainerRef} />
    </div>
  );
};

export default Map;