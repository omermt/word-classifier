//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import {Swipeable} from 'react-swipeable';

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

    }
  }

  render(){
    return(
      <Swipeable>
        <Row className="h-100">
          <Col xs={12} md={6} className="mt-2 px-0"> {/*File Preview*/}
            <div className="borderMe mx-0 mx-md-1 vh-custom px-1">
              <FilePreview file={this.dummyString} currentWord={this.currentWord}/>
            </div>
          </Col>
          <Col xs={12} md={6} className="mt-2 px-0"> {/*WordEditing*/}
            <div className="borderMe mx-0 mx-md-1 vh-custom px-1">
              <WordEditing currentWord={this.currentWord}/>
            </div>
          </Col>
        </Row>
      </Swipeable>
    );
  }
}
