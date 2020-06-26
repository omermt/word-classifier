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
      onLeftTop: false
    }

    this.onClick = this.onClick.bind(this);
    this.moveToRight = this.moveToRight.bind(this);
    this.moveToLeft = this.moveToLeft.bind(this);
  }

  onClick(event){
    const theEvent = event;
    if(theEvent.ctrlKey){
      theEvent.preventDefault();
      if(theEvent.screenX >= (window.innerWidth/2)){
        this.moveToRight();
      }else{
        this.moveToLeft();
      }
    }
  }

  moveToRight(){
    if(!this.state.onLeftTop){
      console.debug("Already on Right");
    }else{
      console.debug("Moved to Right");
      this.setState({
        onLeftTop: false
      });
    }
  }

  moveToLeft(){
    if(this.state.onLeftTop){
      console.debug("Already on Left");
    }else{
      console.debug("Moved to Left");
      this.setState({
        onLeftTop: true
      });
    }
  }

  render(){
    return(
      <Swipeable onSwipedLeft={this.moveToLeft} onSwipedRight={this.moveToRight}>
        <Row className="h-100 overflow-hidden" onClick={this.onClick}>
          <CSSTransition in={this.state.onLeftTop} timeout={3} classNames="FilePreview">
            <Col xs={12} md={6} className="mt-2 px-0 positionAbsolute default"> {/*File Preview*/}
             <div className="borderMe mx-0 mx-md-1 vh-custom px-1">
                <FilePreview file={this.dummyString} currentWord={this.currentWord}/>
              </div>
            </Col>            
          </CSSTransition>
          <CSSTransition in={!this.state.onLeftTop} timeout={3} classNames="WordEdit">
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
