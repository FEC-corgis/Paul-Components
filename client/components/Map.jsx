import React, {useState, useEffect, useRef} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import GoogleMapReact, {Marker} from 'google-map-react';
import {getDetes} from '../helper/api';
import './map.css';

const Map = (props) => {
  let locationSection;
  const [locationDetes, setLocationDetes] = useState([]);

  const updateLocationDetes = () => getDetes(props.match.params.id)
    .then(data => setLocationDetes(data));
  
  useEffect(()=>{
    updateLocationDetes();
  }, []);

  locationDetes[0] ?
    locationSection = (
      <div className="locationContainer">
        <div className="flexContainer">
          <div className="contentContainer">
            <div className="headerTitle"><h2>Location</h2></div>
            <div className="mapContainer">
              <GoogleMapReact 
                bootstrapURLKeys={{
                  key: 'AIzaSyDN4lPQ-CK--_tZxB-oBxfKscxh8WleL8w', 
                  language: 'en'
                }}
                mapContainerStyle={{
                  height: '480px',
                  width: '1128px'
                }}
                defaultCenter={{lat: locationDetes[0].latitude, lng: locationDetes[0].longitude}}
                center={{lat: locationDetes[0].latitude, lng: locationDetes[0].longitude}}
                defaultZoom={16}
              />
            </div>
            <div className="cityStateCountry"><h1>{locationDetes[0].city}, {locationDetes[0].state}, {locationDetes[0].country}</h1></div>
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
