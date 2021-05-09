import React, { useRef, useEffect, useState } from 'react';
import MapboxGL from 'mapbox-gl';
import MapboxDraw from "mapbox-gl-draw";
import 'mapbox-gl/dist/mapbox-gl.css'
import 'mapbox-gl-draw/dist/mapbox-gl-draw.css';
import Turf from 'turf';
import config from '../config';
import Sidebar from './Sidebar';
import './Map.css';

MapboxGL.accessToken = config.apiKey;

const Map = () => {
  
  const [lines, setLines] = useState([]);
  const [selected, setSelection] = useState([]);
  const [lat, setLat] = useState(59.8586);
  const [lng, setLng] = useState(17.6389);
  const [zoom, setZoom] = useState(15);

  const mapContainerRef = useRef(null);
  const stateRef = useRef();
  stateRef.current = lines;

  // Pre-set selections are necessary for the deletion process
  const selectionRef = useRef();
  selectionRef.current = selected;
  
  const submitClickCallback = () => {
    // Remove MapBox Line as well
    console.log("Submit clicked")
    setLines([])
  }

  useEffect(() => {
    const map = new MapboxGL.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control
    map.addControl(new MapboxGL.NavigationControl(), 'bottom-right');

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
      
    // Add drawing control
    map.addControl(draw, 'bottom-right');

    // MAp Events
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    
    map.on('click', selectLines);
    map.on('draw.create', addItem);
    map.on('draw.update', updateItem);
    map.on('draw.delete', deleteItems);

    function selectLines(){
      let selected = draw.getSelected()
      let newHighlightedList = stateRef.current;
      if (selected.features.length !== 0){
        setSelection([...selected.features])
        for (let i = 0; i < selected.features.length; i++) {
          var index = newHighlightedList.findIndex(item => item.id === selected.features[i].id)
          newHighlightedList[index].highlighted = true;
        }
      }
      else{
        for (let i = 0; i < newHighlightedList.length; i++) {
          newHighlightedList[i].highlighted = false;
        }
      }
      setLines([...newHighlightedList]);
    }

    function addItem(line){
      const dist = (Turf.lineDistance({
        "type": "LineString",
        "coordinates": line.features[0].geometry.coordinates,
      }, 'kilometres')).toFixed(2);

      const item = {
        id: line.features[0].id,
        highlighted: false,
        dist: dist,
        cost: dist * 100,
        coords: line.features[0].geometry.coordinates
      }
      setLines(oldArray => [...oldArray, item]);
    }

    function updateItem(){
      let selected = draw.getSelected()
      let newHighlightedList = stateRef.current;

      for (let i = 0; i < selected.features.length; i++) {
        var index = newHighlightedList.findIndex(item => item.id === selected.features[i].id)

        // Repetetive?
        const dist = Turf.lineDistance({
          "type": "LineString",
          "coordinates": selected.features[i].geometry.coordinates,
        }, 'kilometres').toFixed(2);

        newHighlightedList[index].highlighted = selected.features[i].geometry.coordinates;
        newHighlightedList[index].dist = dist;
        newHighlightedList[index].cost = dist * 100;
      }
      setLines([...newHighlightedList]);
    }

    function deleteItems(){
      let selected = selectionRef.current;
      let newHighlightedList = stateRef.current;
      for (let i = 0; i < selected.length; i++) {
        var index = newHighlightedList.findIndex(item => item.id === selected[i].id)
        newHighlightedList.splice(index, 1);
      }
      setLines([...newHighlightedList]);
    }
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div>
      <Sidebar 
        submitClickCallback = {submitClickCallback}
        lines = {lines}/>
      <div className='map' ref={mapContainerRef} />
    </div>
  );
};

export default Map;