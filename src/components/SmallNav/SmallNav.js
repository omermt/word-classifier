//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import {getString, setNewString} from './functions';

//Style imports
import './style.css';

export default class SmallNav extends Component{

    //Populate instructions to display in the center of the nav
  constructor(props){
    super(props);

    this.instructionsArray = [
      'Swipe Left to change Layout on WordEditing Section',
      'Everything ok?'
    ];

    this.state = {
      currentString: getString()
    }
  }

  componentDidMount(){

    let index = 0;

    this.stringInterval = setInterval(()=>{
      this.setState({currentString: getString()})
    }, 500);

    this.changeWordInterval = setInterval(()=>{
      if(index === this.instructionsArray.length){ index = 0;}
      setNewString(this.instructionsArray[index]);
      index ++;
    }, 30000);
  }

  componentWillUnmount(){
    clearInterval(this.stringInterval);
    clearInterval(this.changeWordInterval);
  }

  render(){
    return (
      <Row className="borderMe pt-1" as="header">
        <Col xs={4} sm={3} className="pl-2 pr-0">
          <Typist cursor={{show: false}} className="h4">Word Classifier</Typist>
        </Col>
        <Col xs={4} sm={6}>
          <pre className="text-center h5 pt-1 pre">{this.state.currentString}</pre>
        </Col>
        <Col xs={4} sm={3} className="pr-0">
          <Typist cursor={{show: false}} className="pt-1">Omer Marquez 2020</Typist>
        </Col>
      </Row>
    );
  }
}
