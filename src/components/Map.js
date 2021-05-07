import React, { useRef, useEffect, useState } from 'react';
import MapBoxGL from 'mapbox-gl';
import MapboxDraw from "mapbox-gl-draw";
import Turf from 'turf';
import 'mapbox-gl-draw/dist/mapbox-gl-draw.css';
import './Map.css';
import config from '../config';
import Sidebar from './Sidebar';

MapBoxGL.accessToken = config.apiKey;

// Investigate situation where Map is re-rendered
// Everytime a movement takes place.
const Map = () => {
  const mapContainerRef = useRef(null);

  const [lines, setLine] = useState([]);
  const [lat, setLat] = useState(59.8586);
  const [lng, setLng] = useState(17.6389);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    const map = new MapBoxGL.Map({
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
    map.addControl(new MapBoxGL.NavigationControl(), 'bottom-right');
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
      let selected = draw.getSelected()
      if (selected.features.length != 0){
        console.log(selected)
      }
    });

    map.on('draw.create', addItem)

    function addItem(line){
      console.log(line)
      const dist = Turf.lineDistance({
        "type": "LineString",
        "coordinates": line.features[0].geometry.coordinates,
      }, 'kilometres').toFixed(3)

      const item = {
        id: line.features[0].id,
        dist: dist,
        cost: dist*100,
        coords: line.features[0].geometry.coordinates
      }
      setLine(oldArray => [...oldArray, item]);
    }


    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div>
      <Sidebar 
        lines = {lines} 
        onChange={setLine}/>
      <div className='map' ref={mapContainerRef} />
    </div>
  );
};

export default Map;