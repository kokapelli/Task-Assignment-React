import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../config';

mapboxgl.accessToken = config.apiKey;

class Map extends Component{
  constructor(props){
    super(props);
    this.state = {
      longitude: 17.6389,
      latitude: 59.8586,
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
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  }

  render(){
    return(
      <div>
        <div ref = {el => this.mapContainer = el} style={{width: '100%', height: '100vh'}}/>
      </div>
    )
  }
}

export default Map;