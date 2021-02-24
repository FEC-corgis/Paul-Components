import React, {useState, useEffect, useRef} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {getDetes} from '../helper/api';
import './map.css';

const Map = (props) => {
  let locationSection;

  const mapCanvas = () => {
    let map = new window.google.maps.Map(document.getElementById('mapObject'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  };

  const [locationDetes, setLocationDetes] = useState([]);

  const updateLocationDetes = () => getDetes(props.match.params.id)
    .then(data => setLocationDetes(data));

  useEffect(()=>{
    updateLocationDetes();
    mapCanvas();
  }, []);


  
  locationDetes[0] ?
    locationSection = (
      <div className="locationContainer">
        <div className="flexContainer">
          <div className="contentContainer">
            <div className="headerTitle"><h2>Location</h2></div>
            <div style={{width: 500, height: 500}} id="mapObject"></div>
            <div className="cityStateCountry"><h1>{locationDetes[0].propertyCity}, {locationDetes[0].propertyState}, {locationDetes[0].propertyCountry}</h1></div>
            <div className="locationDescription">{locationDetes[0].description}</div>
            <a className="mapBtn" href="">More about the location</a>
          </div>
        </div>
      </div>
    ) : locationSection = null;

  return locationSection;
};

ReactDOM.render(<Router>
  <Route exact path={'/rooms/:id'} component={Map}/>
</Router>, document.getElementById('map'));
