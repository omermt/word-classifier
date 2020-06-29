//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import {getString, setNewString} from './functions';

//Style imports
import './style.css';


export default class SmallNav extends Component{


  constructor(props){
    super(props);

    this.instructionsArray = [
      'Swipe Left to change Layout on WordEditing Section',
      'Or CTRL + Click on Screen',
      'Everything ok?'
    ];

    this.state = {
      //Populate initial String
      currentString: getString()
    }
  }

  componentDidMount(){

    let index = 0; //Keep track of the instructionsArray
    /*
      Since setInterval will call a function which references this variable,
      index will be a permanent reference
    */
    this.stringInterval = setInterval(()=>{
      this.setState({currentString: getString()})
    }, 300);

    this.changeWordInterval = setInterval(()=>{
      if(index === this.instructionsArray.length){ index = 0;}
      setNewString(this.instructionsArray[index]);
      index ++;
    }, 30000); //Change String every 30 seconds
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
