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
    return (
      <div className="pl-1">
        <h1>File Title Here</h1>
        <p className="h4"><pre className="pre">{this.dummyTest}</pre></p>
      </div>
    );
  }
}
