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
  constructor(props){
    super(props);

    this.state = {
      currentTime: new Date().toLocaleTimeString()
    }

    this.runClock = this.runClock.bind(this);
  }

  runClock(){
    this.setState({currentTime: new Date().toLocaleTimeString()})
  }

  componentDidMount(){
    console.log("Big Nav mounted");
    this.runClockInterval = setInterval(this.runClock, 1000);//Repeate Every second
  }

  componentWillUnmount(){
    clearInterval(this.runClockInterval);
    console.log("Time Deleted on Big Nav");
  }

  render(){
    return(
      <Row as="header" className="mt-n3">
        <Col>
          <Typist cursor={{show:true, hideWhenDoneDelay: 500, hideWhenDone: true}} className="text-right display-4">
            <span>Word Classifier</span>
          </Typist>
        </Col>
        <Col className="pt-4">
        {/*The Typist can't be used here, not updated correctly*/}
          <span className="text-left h3">{this.state.currentTime}</span>
        </Col>
      </Row>
    );
  }
}
