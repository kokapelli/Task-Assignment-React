import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import config from '.././config';

mapboxgl.accessToken = config.apiKey;

class MapWindow extends Component{
  constructor(props){
    super(props);
    this.state = {
      longitude: 59.8736896,
      latitude: 7.6521216,
      zoom: 15
    }
  }
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [this.state.longitude, this.state.latitude],
      zoom: 15
    })
  }

  render(){
    return(
      <div>
        <div ref = {el => this.mapContainer = el} style={{width: '100%', height: '100vh'}}/>
      </div>
    )
  }
}

export default MapWindow;
/*
mapboxgl.accessToken = config.apiKey;

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',                             // ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: center,                             // Init position [lng, lat]
    zoom: 15                                   // Init zoom
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

}
*/