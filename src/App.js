import React, {Component} from 'react';
import './App.css';
import InConstruction from './components/construction/construction.js';
import Banner from './components/Banner/banner.js';
import {Container} from 'react-bootstrap';
import Typist from 'react-typist';

export default class App extends Component {
  render(){
    return (
      <Container fluid="true" className="TopElement">
        <Banner />
        <footer className="pl-2 fixed-bottom">
          <Typist cursor={{show:false}}>
            <span className="h4">&gt;Omer Marquez 2020</span>
          </Typist>
        </footer>
      </Container>
    );
  }
}
