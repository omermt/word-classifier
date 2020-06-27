//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'*/

//Style imports
import './style.css';

export default class WordEditing extends Component{

  render(){
    return (
      <div>
        <Row className="h1 py-2 w-100">{/*Word Preview*/}
          <Col xs={{span: 'auto'}}>
            <Typist cursor={{show:false}}>&gt; Current Word: <span className="active">The Word</span> </Typist>
          </Col>
        </Row>
        <Row className="h3 w-100">{/*Add Grammatical Class*/}
          <Col xs={12} className="py-2">
            <Typist cursor={{show:false}} st>&gt; Grammatical Classification </Typist>
            <div className="inputStyle pl-3 text-info">
              &gt;
              <input type="text" placeholder="Add Grammatical Category" className="w-75"></input>
            </div>
          </Col>
        </Row>
        <Row className="h3 w-100">{/*Add Description*/}
          <Col xs={12} className="py-2">
            <Typist cursor={{show:false}} st>&gt; Description of the Word</Typist>
            <div className="inputStyle pl-3 text-info">
              &gt;
              <input type="text" placeholder="Optional, 'word' by default" className="w-75"></input>
            </div>
          </Col>
        </Row>
        <Row className="pt-4 pt-md-0 mt-5">{/*Submit button, auto focus, button on movil*/}
          <Col className="text-center h1 text-primary" role="button"><div>&rarr;</div>Next Word</Col>
        </Row>
        <Row>
          <Col xs={6} className="text-danger text-center pt-2 h4" role="button"
            onClick={()=>{console.debug('WordEditing Event Fired');this.props.changeState({UploadSection: true, File: false})}}>
            <div>&larr;</div>
            Upload Another File
          </Col>{/*Download .txt doc*/}
          <Col xs={6} className="text-success text-center pt-2 h4" role="button">
            <div>&darr;</div>
            <div>Download .txt with the work you have so far</div>
          </Col>
        </Row>
        <Row className="w-100 h5 pl-md-4 pl-1 pt-3 pt-md-0">{/*Status Here*/}
          <Col xs={12}>Word Info:</Col>
          <Col xs={4}>Current: 9999</Col>
          <Col xs={4}>Total: 9999</Col>
          <Col xs={4}>Left: 9999</Col>
        </Row>
      </div>
    );
  }
}
