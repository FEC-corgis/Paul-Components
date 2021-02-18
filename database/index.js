const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maps');

let mapSchema = mongoose.Schema({
  id: Number,
  propertyCity: String, 
  propertyState: String, 
  propertyCountry: String, 
  latitude: Number,
  longitude: Number,
  description: String 
});

let Map = mongoose.model('Map', mapSchema);

const saveToDb = (loc) => {
  let location = new Map({
    id: loc.id,
    propertyCity: loc.city,
    propertyState: loc.state,
    propertyCountry: loc.country,
    latitude: loc.lat,
    longitude: loc.long,
    description: loc.description
  });
  location.save(err=>{
    if (err) { console.log(err); }
  });
};

module.exports.saveToDb = saveToDb;