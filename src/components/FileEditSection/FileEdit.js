//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import {Swipeable} from 'react-swipeable';
import {CSSTransition} from 'react-transition-group';

//Components import
import FilePreview from '../FilePreview/FilePreview';
import WordEditing from '../WordEditing/WordEditing';

//Style imports
import './style.css';

export default class FileEditSection extends Component{
  constructor(props){
    super(props);

    this.dummyString = "Hello, this is a test string.\n To be used by other components";
    this.currentWord = "hello";

    this.state = {
      toggleState: false
    }

    this.onClick = this.onClick.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  onClick(event){
    const theEvent = event;
    if(theEvent.ctrlKey){
      theEvent.preventDefault();
      this.toggleState();
    }
  }

  toggleState(){
    this.setState((prevState, props) =>{
       return {toggleState: !prevState.toggleState}
    })
  }

  render(){
    return(
      <Swipeable onSwipedLeft={this.toggleState}>
        <Row className="h-100" onClick={this.onClick}>
          <CSSTransition in={this.state.toggleState} timeout={3} classNames="FilePreview">
            <Col xs={12} md={6} className="mt-2 px-0 positionAbsolute default"> {/*File Preview*/}
             <div className="borderMe mx-0 mx-md-1 vh-custom px-1">
                <FilePreview file={this.dummyString} currentWord={this.currentWord}/>
              </div>
            </Col>            
          </CSSTransition>
          <CSSTransition in={!this.state.toggleState} timeout={3} classNames="WordEdit">
            <Col xs={12} md={6} className="mt-2 px-0 positionAbsolute"> {/*WordEditing*/}
              <div className="borderMe mx-0 mx-md-1 vh-custom px-1">
                <WordEditing currentWord={this.currentWord}/>
              </div>
            </Col>  
          </CSSTransition>
        </Row>
      </Swipeable>
    );
  }
}
