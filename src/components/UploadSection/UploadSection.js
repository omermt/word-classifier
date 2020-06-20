//Basic React import
import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Typist from 'react-typist';

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
    //thus, avoidin using an id, the using the document API directly
    this.fileButton = React.createRef();

    this.triggerFileButton = this.triggerFileButton.bind(this);
  }

  //This is the function to trigger a File Search
  triggerFileButton(){

    //Since the element to which we apply the ref is a DOM element,
    //current points directly to that DOM element.
    //If a class where used instead, it will point to the instance of that class
    this.fileButton.current.click();
  }

  render(){
    return(
      <Row>
        {/*Sheet image*/}
        <Col xs={12} md={6} className="mr-n2 mr-sm-0 pl-0">
          <pre className="ascii text-success pt-3 pl-0 pl-sm-3">
            {`


   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @/                                  @#@@
   @/                                  @#   @@
   @/                                  @(     @@
   @/    @@@@@@@@@@@@@@@*              @/        @@
   @/                                  @%((((((((((&@*
   @/    @@@@@@@@@@@@@@@@@@#                        %@
   @/                                               %@
   @/                                               %@
   @/                                               %@
   @/                                               %@
   @/                                               %@
   @/    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        &@
   @/                                               &@
   @/    @@@@@@@@@@@@@@@@@@@@@@                     &@
   @/                                               &@
   @/    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@
   @/                                               @@
   @/    @@@@@@@@@@@@@@@@@@@@@@                     @@
   @/                                               @@
   @/    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@
   @/                                               @@
   @/    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@
   @/                                               @@
   @/    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        @@
   @/                                               @&
   @/                                               @&
   @/                                               @&
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(

`}
          </pre>
        </Col>
        {/*Buttons*/}
        <Col xs={12} md={6}>
          <Row className="mt-sm-5">
            <Col xs={6} md={12} role="button" className="mt-0 mt-md-5">
                 <input type="file" hidden ref={this.fileButton}></input>
                 <Typist className="text-info h1 pt-md-4 mt-md-5" cursor={{show: false}}>
                      <span onClick={this.triggerFileButton} className="pt-5 pt-md-0">&gt;Press here to upload a file</span>
                 </Typist>
             </Col>
             <Col xs={6} md={12} className="mt-0 mt-md-5" role="button">
               <Typist className="text-info h1 mt-md-3" startDelay={3900} cursor={{show: false}}>
                  <span>&gt;Or here, to use a test file</span>
               </Typist>
             </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
