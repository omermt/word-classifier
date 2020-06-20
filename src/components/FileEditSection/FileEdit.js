//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import SmallNav from '../SmallNav/SmallNav';
import BigNav from '../BigNav/BigNav'; //Pass to App Component

//Components import
import FilePreview from '../FilePreview/FilePreview';
import WordEditing from '../WordEditing/WordEditing';

//Style imports
import './style.css';

export default class FileEditSection extends Component{
    render(){
        return(
          <Row className="h-100">
              <Col xs={12}> {/*This col will wrap itself is a new row*/}
                  {this.props.isDesktop? <BigNav /> : <SmallNav /> /*Will be rerendered when needed, move this to App*/}
              </Col>
              <Col xs={12} md={6} className="mt-2 px-0">
                <div className="borderMe mx-0 mx-md-1 vh-custom vh-md-custom px-1">
                  <FilePreview />
                </div>
              </Col>
              <Col xs={12} md={6} className="mt-2 px-0">
                <div className="borderMe mx-0 mx-md-1 vh-custom vh-md-custom px-1">
                  <WordEditing />
                </div>
              </Col>
          </Row>
        );
    }

}
