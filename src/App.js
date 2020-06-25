//Basic React import
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Container} from 'react-bootstrap';

//Component imports
//import InConstruction from './components/Construction/construction';
import SmallNav from './components/SmallNav/SmallNav';
import BigNav from './components/BigNav/BigNav';
import InitialScreen from './components/InitialScreen/InitialScreen';
import UploadSection from './components/UploadSection/UploadSection';
import FileEditSection from './components/FileEditSection/FileEdit';
import Error from './components/Error/Error';

//Style imports
import 'react-typist/dist/Typist.css'; //Enable blink globally
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    let mediaQuery = window.matchMedia('(min-width: 768px)');

    this.state= {
        isDesktop: mediaQuery.matches
    }
    //If window size is less than 768px, treat as movil device
    //This is the Bootstrap media query for md
    //Will be passed as prop to children elements

    //If the query state changes, it will rerender what's needed
    mediaQuery.addListener((e) =>{
        this.setState({isDesktop: e.matches})
    })

  }

  render(){
    return (
      <Container fluid className="TopElement min-vh-100">
        {this.state.isDesktop? <BigNav /> : <SmallNav /> /*Will be rerendered when needed, move this to App*/}
        {/*<InitialScreen isDesktop={this.isDesktop} /> Just testing here
        <UploadSection />*/}
        <FileEditSection isDesktop={this.state.isDesktop}/>
        {/*<Error />*/}
        {this.state.isDesktop? <footer className="pl-2 mt-3 fixed-bottom">
          <Typist cursor={{show:false}} startDelay={3000}>
            <span className="h4">&gt;Omer Marquez 2020</span>
          </Typist>
        </footer>: ''}
      </Container>
    );
  }
}
