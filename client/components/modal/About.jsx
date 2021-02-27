import React, {useEffect, useState, useRef} from 'react';
import GoogleMap, {Marker} from 'google-map-react';

const About = ({locationDetes, closeModal}) => (
  <div className="about-modal-container">
    <div className="about-modal-content">
      <div className="headerSection">
        <button className="backbtn" onClick={closeModal}>
          <img src="https://entirehouse-img.s3-us-west-1.amazonaws.com/backbtn-modal.svg"></img>
        </button>
      </div>
      <div className="locationMap">
        <div className="location">
          <h2 className="headerLoc">Location</h2>
          <div className="cityStateCountry"><h1>{locationDetes[0].city}, {locationDetes[0].state}, {locationDetes[0].country}</h1></div>
          <div className="locationDescription">{locationDetes[0].description}</div>
        </div>
        <div className="mapModal">
          <GoogleMap 
            bootstrapURLKeys={{
              key: 'AIzaSyDN4lPQ-CK--_tZxB-oBxfKscxh8WleL8w', 
              language: 'en'
            }}
            mapContainerStyle={{
              height: '750px',
              width: '1275px'
            }}
            defaultCenter={{lat: locationDetes[0].latitude, lng: locationDetes[0].longitude}}
            center={{lat: locationDetes[0].latitude, lng: locationDetes[0].longitude}}
            defaultZoom={16}
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;