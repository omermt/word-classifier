import React, {Component} from 'react';
import './App.css';
import InConstruction from './components/construction/construction';
import InitialScreen from './components/InitialScreen/InitialScreen';
import {Container} from 'react-bootstrap';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      renderBanner: false //Check for screen size here
    }

    this.isDesktop = window.matchMedia('(min-width: 768px)').matches;
    //If window size is less than 768px, treat as movil device
    //This is the Bootstrap media query
  }

  setInitLoading(){
    //Check for screen size first
    if(!this.state.renderBanner /*&& screen-size*/){
      //Set Timeout here
      //return (<Banner />);
    }

    //Screen size movil, show movil loading animation
    //else here, return loading for movil, set timeout to update
  }
  render(){
    return (
      <Container fluid="true" className="TopElement">
        <InitialScreen isDesktop={this.isDesktop} />
      </Container>
    );
  }
}
