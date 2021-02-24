import React, {useState, useEffect, useRef} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import {getDetes} from '../helper/api';
import './map.css';

const Map = (props) => {
  let locationSection;
  const [locationDetes, setLocationDetes] = useState([]);
  const [mapPos, setMapPos] = useState({center: {lat: 40.73, lng: -73.93}, zoom: 12});

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
                  key: 'AIzaSyDjzD_RyxE02CcfG_ZXLNMro2Ek4OFkgzo', 
                  language: 'en'
                }}
                mapContainerStyle={{
                  height: '480px',
                  width: '1128px'
                }}
                defaultCenter={mapPos.center}
                center={mapPos.center}
                defaultZoom={mapPos.zoom}
              />
            </div>
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
