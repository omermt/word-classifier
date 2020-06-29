//Basic React import
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

//Component imports
import {ContextProvider} from './context/isDesktopContext';
import InitialScreen from './components/InitialScreen/InitialScreen';
import UploadSection from './components/UploadSection/UploadSection';
import FileEditSection from './components/FileEditSection/FileEdit';
import ErrorWrapper from './components/Error/ErrorWrapper';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//Style imports
import 'react-typist/dist/Typist.css'; //Enable blink globally
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      InitialScreen: true,
      UploadSection: false,
      File: false
    }

    this.ChangeState = this.ChangeState.bind(this);
    this.getCurrentSection = this.getCurrentSection.bind(this);
  }

  /*
    This function will be passed to the components that need to
    directly change the state of the App, on the project context, 
    change the current Component to render (location of the App).

    This way, the File to load can be passed directly to the
    sibling component, same for the Error Object.

    This is OK, since the variable passed in the App state is
    referenced, not copied into the state.
  */
  ChangeState(state){
    this.setState(state);
  }

  getCurrentSection(){
    //Return the component needed according to the State
      if(this.state.InitialScreen) return (<InitialScreen />);
      if(this.state.UploadSection) return (<UploadSection  changeState={this.ChangeState}/>);
      if(this.state.File) return (<FileEditSection file={this.state.File} changeState={this.ChangeState}/>);
      return (<UploadSection  changeState={this.ChangeState}/>);
      //Default
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({InitialScreen: false, UploadSection: true})
    }, 10000); //Just for animation purposes
  }


  render(){
    return (
      <ContextProvider>
        <Container fluid className="TopElement min-vh-100">
          <Nav />
          <ErrorWrapper changeState={this.ChangeState}>
            {this.getCurrentSection()} 
          </ErrorWrapper>        
          <Footer />
        </Container>
      </ContextProvider>
    );
  }
}
