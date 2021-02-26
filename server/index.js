const express = require('express');
const db = require('../database/');
const port = 4454;
const app = express();
const cors = require('cors');

const bp = require('body-parser');
const path = require('path');
app.use('/rooms/:id', express.static(path.join(__dirname, '..', '/client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(cors());

app.get('/map/:id/', (req, res)=>{
  let {id} = req.params;
  db.retrieveById(id, (data)=>{
    res.send(data);
  });
});

//dane 
app.get('/location/:id/', (req, res)=>{
  let {id} = req.params;
  db.retrieveFromDb(id, (data)=>{
    res.send(data[0]);
  });
});

app.get('/region/:id', (req, res)=>{
  let {id} = req.params;
  db.retrieveRegion(id, (data) =>{
    res.send(data);
  });
});

app.listen(port, ()=>console.log('Server is listening on port ' + port));