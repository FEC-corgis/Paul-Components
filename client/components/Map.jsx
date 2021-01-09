import React from 'react';

export default class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: ''
    }
  }
  
  render = ()=>(
    <div>
        <div id='map'>
            <p>Description of home something something</p>
        </div>
    </div>
  )
}
