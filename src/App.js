//Basic React import
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

//Component imports
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
  constructor(props){
    super(props);

    this.state = {
      InitialScreen: true,
      UploadSection: false,
      File: false,
      Error: false
    }

    this.ChangeState = this.ChangeState.bind(this);
  }

  /*
    This function will be passed to the components that need to
    directly change the state of the App, more directly, change
    the current Component to render (location of the App)

    This way, the File to load can be passed directly to the
    sibling component, same for the Error
  */
  ChangeState(state){
    this.setState(state);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({InitialScreen: false, UploadSection: true})
    }, 10000);
  }

  componentDidCatch(error, info){
    this.setState({
      InitialScreen: false,
      UploadSection: false,
      File: false,
      Error: info.componentStack
    });

    console.log('Error Ocurred');
    console.log('Error: ', error);
    console.log('Error Info: ', info);
  }

  render(){
    let currentSection = () =>{
      //Return the component needed according to the State
      if(this.state.InitialScreen) return (<InitialScreen />);
      if(this.state.UploadSection) return (<UploadSection  changeState={this.ChangeState}/>);
      if(this.state.File) return (<FileEditSection file={this.state.File} changeState={this.ChangeState}/>);
      if(this.state.Error) return (<Error error={this.state.Error} changeState={this.ChangeState}/>)
    }

    return (
      <ContextProvider>
        <Container fluid className="TopElement min-vh-100">
         <Nav />        
          {currentSection()}
          <Footer />
        </Container>
      </ContextProvider>
    );
  }
}
