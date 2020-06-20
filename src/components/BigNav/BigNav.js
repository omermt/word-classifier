//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';

//Style imports
import './style.css';

/*
  This is the Big Header Component, this component is responsable for
  showing the time, and also responsable for keeping a small timer.
*/
export default class BigNav extends Component{
  //Add time logic
  render(){
    return(
      <Row as="header">
        <Col>
          <Typist cursor={{show:true, hideWhenDoneDelay: 500, hideWhenDone: true}} className="text-right display-4">
            <span>Word Classifier</span>
          </Typist>
        </Col>
        <Col className="pt-4">
          <Typist cursor={{show:false}} startDelay={3000} className="text-left  h3">
            <span>Time Here</span>
          </Typist>
        </Col>
      </Row>
    );
  }
}
