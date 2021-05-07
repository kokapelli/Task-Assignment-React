import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from "mapbox-gl-draw";
import 'mapbox-gl-draw/dist/mapbox-gl-draw.css'
import config from '../config';
import './Map.css';
import Sidebar from './Sidebar';

mapboxgl.accessToken = config.apiKey;

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lat, setLat] = useState(59.8586);
  const [lng, setLng] = useState(17.6389);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Add navigation control
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    // Add drawing control

    let draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
      line_string: true,
      combine_features: true,
      uncombine_features: true,
      trash: true
      },
    });
      
    map.addControl(draw, 'bottom-right');

    map.on('click', function(e) {
      // The event object (e) contains information like the
      // coordinates of the point on the map that was clicked.
      console.log('A click event has occurred at ' + e.lngLat);
      let selected = draw.getSelected()
      if (selected.features.length != 0){
        console.log(selected)
      }
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div>
      <Sidebar />
      <div className='map' ref={mapContainerRef} />
    </div>
  );
};

export default Map;