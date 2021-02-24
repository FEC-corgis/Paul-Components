const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maps');

let mapSchema = mongoose.Schema({
  id: Number,
  propertyCity: String, 
  propertyState: String, 
  propertyCountry: String, 
  propertyRegion: String,
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
    propertyRegion: loc.region,
    latitude: loc.lat,
    longitude: loc.long,
    description: loc.description
  });
  location.save(err=>{
    if (err) { console.log(err); }
  });

};

const retrieveById = (pId, cb) => {
  Map.find({id: pId}, (err, data)=>{
    if (err) { console.log(err); }
    cb(data);
  });
};

const retrieveFromDb = (item, cb) => {
  if (item.length > 3) {
    Map.find({propertyRegion: item}, (err, data)=>{
      if (err) { console.log(err); }
      cb(data);
    });
  } else {
    Map.find({id: item}, {propertyCity: 1, propertyState: 1, propertyCountry: 1 }, (err, data)=>{
      if (err) { console.log(err); }
      cb(data);
    });
  }
};

module.exports.saveToDb = saveToDb;
module.exports.retrieveFromDb = retrieveFromDb;
module.exports.retrieveById = retrieveById;