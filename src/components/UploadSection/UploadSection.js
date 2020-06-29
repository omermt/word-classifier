//Basic React import
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faUpload, faVial, faExclamation } from '@fortawesome/free-solid-svg-icons'

//Style import
import './style.css';

//Components
import LoadingBar from '../LoadingBar/loadingBar';

import {configEvents, reader, analyzeText} from './readFunctions.js';

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

    this.testFile = "Hello, this this is a test string.\nTo be used by other components";

    this.triggerFileButton = this.triggerFileButton.bind(this);
    this.sendTestFile = this.sendTestFile.bind(this);
    this.HandleFileUpdate = this.HandleFileUpdate.bind(this);

    //HTML Classes
    this.sheetClass = "mr-n2 mr-sm-0 pl-0 text-center ascii";
    this.uploadClass = "text-info display-4 pt-md-1 mt-md-5 text-center";
    this.testClass = "mt-0 mt-md-5 text-center text-info display-4 mt-md-3";
    this.initialLoadingClass = "pt-5 text-primary h1 pl-md-5 ml-md-5";

    this.state = {
      isLoading: false,
      isAborted: false,
      isLoaded: false,
      loadingText: 'Test Loading, please Finish Me'
    }
  }

  //This is the function to trigger a File Search
  triggerFileButton(){

    //Since the element to which we apply the ref is a DOM element,
    //the current attribute points directly to that DOM element.
    //If a class where used instead, it will point to the instance of that class
    this.fileButton.current.click();
  }

  /*
    "Send" means to send the File content to the App components. To decide
    what to be done is up to the parent.
  */
  sendTestFile(){
    this.fileName = 'test.txt';
    analyzeText(this.testFile, this);
  }

  HandleFileUpdate(event){
    let file = event.target.files[0];
    console.debug(file);

    if(file.type !== "text/plain") return this.setState({error: "Only .txt files are allowed"});
    
    this.fileName = file.name;
    reader.readAsText(file);
  }

  componentDidMount(){
    configEvents(this); //Add listeners to file events
  }

  render(){
    if(this.state.error) throw new Error(this.state.error);
    if(!this.state.isLoading) return(
      <Row className="mt-2 mt-md-5 pt-0 pt-md-4">
        {/*Sheet image*/}
        <Col xs={12} md={6} className={this.sheetClass}>
          {!(this.state.isAborted)? <FontAwesomeIcon icon={faFileAlt} />:
          <div className="text-danger pt-"><FontAwesomeIcon icon={faExclamation} />
          <div className="h1">File Reading Aborted</div></div>
          }
        </Col>
        {/*Buttons*/}
        <Col xs={12} md={6}>
          <Row>
            <Col xs={6} md={12} role="button" className={this.uploadClass} onClick={this.triggerFileButton}>
              <input type="file" hidden ref={this.fileButton} onChange={this.HandleFileUpdate} accept=".txt" />
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
        <Col xs={12}>
          <aside className="text-center text-warning h4 pt-3">
            Only .txt file allowed
          </aside>
        </Col>
      </Row>
    );

    return(
      <div className="pt-5">
          <LoadingBar/>
          <div className={this.initialLoadingClass}>
            <span className="pl-md-5 ml-md-3">&gt;{this.state.loadingText}</span>
          </div>
          {this.state.isLoaded? '' :<div role="button" onClick={this.onAbort} className="pt-5 text-center text-danger h1">Click Here to Abort</div>}
        </div>
    );
  }
}
