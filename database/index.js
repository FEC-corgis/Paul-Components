const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maps');

let mapSchema = mongoose.Schema({
  id: Number,
  city: String, 
  state: String, 
  country: String, 
  region: String,
  latitude: Number,
  longitude: Number,
  description: String 
});

let Map = mongoose.model('Map', mapSchema);

const saveToDb = (loc) => {
  let location = new Map({
    id: loc.id,
    city: loc.city,
    state: loc.state,
    country: loc.country,
    region: loc.region,
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
  Map.find({id: item}, {city: 1, state: 1, country: 1 }, (err, data)=>{
    if (err) { console.log(err); }
    cb(data);
  });
};

const retrieveRegion = (pId, cb) => {
  Map.find({id: pId}, {region: 1}, (err, data) =>{
    if (err) { console.log(err); }
    Map.find({region: data[0].region}, (err, d) =>{
      if (err) { console.log(err); }
      cb(d);
    });
  });
};

module.exports.saveToDb = saveToDb;
module.exports.retrieveFromDb = retrieveFromDb;
module.exports.retrieveById = retrieveById;
module.exports.retrieveRegion = retrieveRegion;
