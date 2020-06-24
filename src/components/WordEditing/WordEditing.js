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
              <input type="text" placeholder="Add Grammatical Category Here" className="w-75"></input>
              {/*<FontAwesomeIcon icon={faArrowAltCircleUp} className="h4 mb-0" role="button"/>*/}
            </div>
          </Col>
        </Row>
        <Row className="h3 w-100">{/*Add Description*/}
          <Col xs={12} className="py-2">
            <Typist cursor={{show:false}} st>&gt; Description of the Word</Typist>
            <div className="inputStyle pl-3 text-info">
              &gt;
              <input type="text" placeholder="Optional, will fill to 'word' by default" className="w-75"></input>
              {/*<FontAwesomeIcon icon={faArrowAltCircleUp} className="h4 mb-0" role="button"/>*/}
            </div>
          </Col>
        </Row>
        <Row className="pt-5">{/*Submit button, auto focus, button on movil*/}
          <Col xs={6} className="text-center h1 text-primary" role="button"><div>&larr;</div>Preview Word Button Here</Col>
          <Col xs={6} className="text-center h1 text-primary" role="button"><div>&rarr;</div>Next Word Button Here</Col>
        </Row>
        <Row>{/*Download .txt doc*/}
          <Col className="text-success text-center pt-5 h4" role="button" xs={12}>
            <p>&darr; Download .txt with the work you have so far</p>
          </Col>
        </Row>
        <Row className="bottomCount w-100 h5 pl-md-4 pl-1">{/*Status Here*/}
          <Col xs={12}>Word Info:</Col>
          <Col xs={4}>Current: 9999</Col>
          <Col xs={4}>Total: 9999</Col>
          <Col xs={4}>Left: 9999</Col>
        </Row>
      </div>
    );
  }
}
