import React, {Component} from 'react';
import './App.css';
import InConstruction from './components/construction/construction.js';
import Banner from './components/Banner/banner.js';
import {Container} from 'react-bootstrap';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      renderBanner: false //Check for screen size here
    }
  }

  setInitLoading(){
    //Check for screen size first
    if(!this.state.renderBanner /*&& screen-size*/){
      //Set Timeout here
      return (<Banner />);
    }

    //Screen size movil, show movil loading animation
    //else here, return loading for movil, set timeout to update
  }
  render(){
    return (
      <Container fluid="true" className="TopElement">
        {this.setInitLoading()}
      </Container>
    );
  }
}
