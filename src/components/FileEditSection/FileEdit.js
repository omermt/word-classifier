//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import {Swipeable} from 'react-swipeable';
import {CSSTransition} from 'react-transition-group';

//Components import
import FilePreview from '../FilePreview/FilePreview';
import WordEditing from '../WordEditing/WordEditing';

import {Context} from '../../context/isDesktopContext';

//Style imports
import './style.css';

class FileEditSection extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggleState: false,
      currentWord: ''
    }

    this.onClick = this.onClick.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.changeWord = this.changeWord.bind(this);
  }

  onClick(event){
    /*
      This event is registered in the Capturing Phase,
      this means that this handler will fire first, then the
      event will go down to the target, and then up,
      in the bubbling phase
    */
    console.debug('FileEdit Event Fired');
    const theEvent = event;
    if(theEvent.ctrlKey){
      theEvent.stopPropagation(); //Prevent the bubbling phase
      this.toggleState();
    }
  }

  toggleState(){
    console.debug('Shift performed');
    this.setState((prevState, props) =>{
       return {toggleState: !prevState.toggleState}
       //Literally toggle the state
       //A functions is used to make sure that the current state is used
    })
  }

  changeWord(word){
    this.setState({currentWord: word});
  }

  render(){
    let isDesktop = this.context;
    return(
      <Swipeable delta={150} onSwipedLeft={this.toggleState /*Only works on movil or tablet, sholud render small, no need for test*/}>
        <Row className="h-100 overflow" onClickCapture={isDesktop? ()=>{}: this.onClick /*Only set the option if window resized*/}>
          <CSSTransition in={this.state.toggleState} timeout={3} classNames="FilePreview">
            <Col xs={12} md={6} className="mt-2 px-0 positionAbsolute default"> {/*File Preview*/}
             <div className="borderMe mx-0 mx-md-1 fileSection px-1">
                <FilePreview file={this.props.file} currentWord={this.state.currentWord}/>
              </div>
            </Col>            
          </CSSTransition>
          <CSSTransition in={!this.state.toggleState} timeout={3} classNames="WordEdit">
            <Col xs={12} md={6} className="mt-2 px-0 positionAbsolute"> {/*WordEditing*/}
              <div className="borderMe mx-0 mx-md-1 vh-custom px-1">
                <WordEditing currentWord={this.state.currentWord.toLowerCase()} changeState={this.props.changeState} changeWord={this.changeWord} file={this.props.file}/>
              </div>
            </Col>  
          </CSSTransition>
        </Row>
      </Swipeable>
    );
  }
}


FileEditSection.contextType = Context;

export default FileEditSection;
