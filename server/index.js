const express = require('express');
const port = 4454;
const app = express();

const bp = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/map/', (req,res)=>{
  console.log('display map!');
});

app.listen(port, ()=>console.log('Server is listening on port '+port));