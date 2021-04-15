
import './App.css';

import axios from "axios";
import React, { Component } from 'react';
import Team from './Component/team';



class App extends Component {
  constructor(props){
    super(props);
    this.state=({
      teams: []
    })

    
  }
 


componentDidMount() {
  axios
  .get("https://challenge.nfhsnetwork.com/v2/search/events/upcoming?state_association_key=18bad24aaa&amp;card=true&amp;size=50&amp;start=0")
  .then(response => {
    console.log(response.data.items)
    this.setState({teams: response.data.items})
    });

  }

  
render() {
  return (

<Team data={this.state.teams}/>

  );
}
}
export default App;


