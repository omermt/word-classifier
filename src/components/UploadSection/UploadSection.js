//Basic React import
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faUpload, faVial } from '@fortawesome/free-solid-svg-icons'

//Style import
import './style.css';

/*
    This component will handle the loading of a file, given by the user,
    or a test file, that will be provided by the App.

    After a file has been uploaded, this component will render a loading bar,
    with a custom message, letting the user know that his/her file is been uploaded.

    After uploading, the file will be read, updating the loading message accordinly.

    After the file is loaded, it will be sent to the main App to render the appropiate view.
*/
export default class UploadSection extends Component{

  constructor(props){
    super(props);

    //Making use of React's ref, we will access a DOM element using the prop
    //thus, avoidin using an id, using the document API directly
    this.fileButton = React.createRef();

    this.testFile = "Hello, this is a test string.\n To be used by other components";

    this.triggerFileButton = this.triggerFileButton.bind(this);
    this.sendTestFile = this.sendTestFile.bind(this);

    //HTML Classes
    this.sheetClass = "mr-n2 mr-sm-0 pl-0 text-center ascii";
    this.uploadClass = "text-info display-4 pt-md-1 mt-md-5 text-center";
    this.testClass = "mt-0 mt-md-5 text-center text-info display-4 mt-md-3";
  }

  //This is the function to trigger a File Search
  triggerFileButton(){

    //Since the element to which we apply the ref is a DOM element,
    //the current attribute points directly to that DOM element.
    //If a class where used instead, it will point to the instance of that class
    this.fileButton.current.click();
  }

  sendTestFile(){
    this.props.changeState({UploadSection: false, File: this.testFile})
  }

  HandleFileUpdate(){
    console.debug(this);
  }

  render(){
    return(
      <Row className="mt-md-5 pt-md-4">
        {/*Sheet image*/}
        <Col xs={12} md={6} className={this.sheetClass}>
          <FontAwesomeIcon icon={faFileAlt} />
        </Col>
        {/*Buttons*/}
        <Col xs={12} md={6}>
          <Row>
            <Col xs={6} md={12} role="button" className={this.uploadClass} onClick={this.triggerFileButton}>
              <input type="file" hidden ref={this.fileButton} onChange={this.HandleFileUpdate}></input>
              <Typist cursor={{show: false}}>
                <div><FontAwesomeIcon icon={faUpload} /></div>
                <span className="pt-5 pt-md-0">Upload Your File</span>
              </Typist>
            </Col>
            <Col xs={6} md={12} className={this.testClass} role="button" onClick={this.sendTestFile}>
              <Typist cursor={{show: false}}>
                <div><FontAwesomeIcon icon={faVial} /></div>
                <p>Use a Test File</p>
              </Typist>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
