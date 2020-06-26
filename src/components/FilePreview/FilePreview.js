//React basic imports
import React, {Component} from 'react';

//Style imports
import './style.css';

export default class FilePreview extends Component{
  constructor(props){
    super(props);

    this.dummyTest = "Hello there, this's a dummy test.\nUsed only for testing, don't mind it";

  }

  render(){

    let string = this.dummyTest.split(' ').map(word =>{
      let theWord = word.toLowerCase()
      return (
        <span>
          <span className={this.props.currentWord === theWord ? 'active': ''}>{word}</span>
          <span> </span>
        </span>
        )
    });

    return (
      <div className="pl-1">
        <h1>File Title Here</h1>
        <pre className="pre h4">{string}</pre>
      </div>
    );
  }
}
