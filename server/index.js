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

//endpoint for Jenny and Dane ex ?region=west || ?id=12
app.get('/location/', (req, res)=>{
  if (req.query.region) {
    db.retrieveFromDb(req.query.region, (data)=>{
      res.send(data);
    });
  }
  if (req.query.id) {
    db.retrieveFromDb(req.query.id, (data)=>{
      res.send(data);
    });
  }
});

app.listen(port, ()=>console.log('Server is listening on port ' + port));