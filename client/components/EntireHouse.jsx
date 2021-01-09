import React from 'react';

export default class EntireHouse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: ''
    }
  }
  
  render = ()=>(
    <div>
        <div id='entire'>
            <p>Description of host something something</p>
        </div>
    </div>
  )
}
