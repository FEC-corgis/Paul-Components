import React, {useState, useEffect, useRef} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';

const Map = (props) =>(
  render(
    <div>
      <h1>Map</h1>
    </div>
  )
)

// ReactDOM.render(<Router>
//   <Route exact path={"/rooms/:id"} component={Map}/>
// </Router>, document.getElementById('map'));

ReactDOM.render(<Map />, document.getElementById('map'));