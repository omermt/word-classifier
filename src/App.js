//Basic React import
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

//Component imports
//import InConstruction from './components/Construction/construction';
import {ContextProvider} from './context/isDesktopContext';
import InitialScreen from './components/InitialScreen/InitialScreen';
import UploadSection from './components/UploadSection/UploadSection';
import FileEditSection from './components/FileEditSection/FileEdit';
import Error from './components/Error/Error';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//Style imports
import 'react-typist/dist/Typist.css'; //Enable blink globally
import './App.css';

export default class App extends Component {
  render(){
    return (
      <ContextProvider>
        <Container fluid className="TopElement min-vh-100">
         <Nav />
          {/*<InitialScreen isDesktop={this.isDesktop} /> Just testing here
         <UploadSection />*/}
          <FileEditSection />
          {/*<Error />*/}
          <Footer />
        </Container>
      </ContextProvider>
    );
  }
}
