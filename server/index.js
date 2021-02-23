const express = require('express');
const db = require('../database/');
const port = 4454;
const app = express();

const bp = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/map/:id/', (req, res)=>{
  res.send('mapppppp');
});

app.get('/cityStateCountry/', (req, res)=>{
  console.log(req.query.region);
  db.retrieveFromDb(req.query.region, (data)=>{
    res.send(data);
  });
});

app.listen(port, ()=>console.log('Server is listening on port ' + port));