//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

//Style imports
import './style.css'

export default class Error extends Component{

   render(){
      return (
        <div>
          <Row>
            <Col xs={12} md={6} className="text-center mt-n5 text-danger sadFace mb-n5">
              <p className="mb-0">:(</p>
            </Col>
            <Col xs={12} md={6} className="text-warning  pt-3">
              <p className="display-4">
                An error ocuured, but it's not your fault. Don't worry
              </p>
            </Col>
          </Row>
          <Row>
          <Col xs={{span: 12, order:'last'}} md={{span:6, order:'first'}} role="button" className="text-primary h1 pt-1">
            <Typist cursor={{show:false}} className="d-none d-md-block display-4 text-center">
              <div><FontAwesomeIcon icon={faArrowAltCircleLeft} /></div>
              Go to File Uploading Section
            </Typist>
            <Typist cursor={{show:false}} className="d-block d-md-none h1">
             <div><FontAwesomeIcon icon={faArrowAltCircleLeft} /></div>
              Go to File Uploading Section
            </Typist>
          </Col>
          <Col xs={{span: 12, order:'first'}} md={{span:6, order:'last'}} className="h2 errorStackSize overflow-auto">
            <p>
              Error Stack Trace
              {this.props.error}
            </p>
          </Col>
        </Row>
      </div>
     )
   }
}
