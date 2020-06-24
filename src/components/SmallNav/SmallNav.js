//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';

//Style imports
import './style.css';

export default class SmallNav extends Component{

    //Populate instructions to display in the center of the nav
    render(){
        return (
          <Row className="borderMe pt-1" as="header">
            <Col xs={4} className="pl-2 pr-0">
              <Typist cursor={{show: false}} className="h4">Word Classifier</Typist>
            </Col>
            <Col xs={4}>
              <Typist cursor={{show: false}} className="text-center h5 pt-1" startDelay={3000}>Text Here</Typist>
            </Col>
            <Col xs={4} className="px-0">
              <Typist cursor={{show: false}} className="pt-1">Omer Marquez 2020</Typist>
            </Col>
          </Row>
        );
    }

}
