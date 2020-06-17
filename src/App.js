import React, {Component} from 'react';
import './App.css';
import InConstruction from './components/construction/construction.js';
import {Container} from 'react-bootstrap';

export default class App extends Component {
  render(){
    return (
      <Container fluid="true" className="TopElement">
        <InConstruction />

        <footer>
          <code>&gt;Omer Marquez 2020</code>
        </footer>
      </Container>
    );
  }
}
