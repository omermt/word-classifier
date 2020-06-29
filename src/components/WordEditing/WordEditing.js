//React basic imports
import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';

//Style imports
import './style.css';


export default class WordEditing extends Component{
  
  constructor(props){
    super(props);

    this.requestNewWord = this.requestNewWord.bind(this);
    this.nextWord = this.nextWord.bind(this);
    this.downloadProgress = this.downloadProgress.bind(this);

    this.index = 0;
    this.fileLength = this.props.file.forWordEditing.length;
    this.wordObject = {}

    this.grammaticalInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.downloadLink = React.createRef();
  }


  requestNewWord(){

    if(this.index < this.fileLength){
      this.props.changeWord(this.props.file.forWordEditing[this.index]);
      this.index ++;
    }else{
      this.props.changeWord('Click Again to produce an error');
    }
  }

  /*
    Download a .txt containing the work the user has done
  */
  downloadProgress(){
    let finalText = '';

    Object.keys(this.wordObject).forEach(word =>{
      const wordInstance = this.wordObject[word];
      finalText +=`Word: ${word} - Grammatical Classification: ${wordInstance.classification} - Description: ${wordInstance.description}\n - Times Repeated: ${wordInstance.times}\n`;
    });

    const fileURL = URL.createObjectURL(new Blob([finalText], {type:'text/plain'}));
    this.downloadLink.current.href = fileURL;//Yess
    this.downloadLink.current.click();
    console.debug(this.downloadLink.current);
  }

  nextWord(){
    this.wordObject[this.props.currentWord] = {
      grammaticalCategory: this.grammaticalInput.current.value,
      description: this.descriptionInput.current.value,
      times: 1
    }

    console.debug("New Word Added:", this.props.currentWord);
    console.debug(this.wordObject[this.props.currentWord]);

    this.requestNewWord();
  }


  componentDidMount(){
    this.requestNewWord();
    //Populate the initial word
  }


  /*
    Every time a new word is passed down via props, this method
    is triggered.

    componentDidUpdate will make sure that the word passed is not a word
    the user already added (repeated).

    In that case, the "times" counter, in the word instance, will be 
    incremented by 1 and a new word will be requested.

    This has a bug, when the user finished, a fixed message will be displayed,
    if the user clicks "next" again, an infinite loop will be created here.

    This was left here for demostrational porpuses of the Error section.
  */
  componentDidUpdate(){
    let wordInstance = this.wordObject[this.props.currentWord];
    if(wordInstance && (this.props.currentWord !== this.LastWord)){
      wordInstance.times ++;
      this.requestNewWord(true);
    }
  }


  render(){
    return (
      <div>
        <Row className="h1 py-2 w-100">{/*Word Preview*/}
          <Col xs={{span: 'auto'}}>
            <span>&gt; Current Word: </span>
            <span className="active">{this.props.currentWord}</span>
          </Col>
        </Row>
        <Row className="h3 w-100">{/*Add Grammatical Class*/}
          <Col xs={12} className="py-2">
            <Typist cursor={{show:false}} st>&gt; Grammatical Classification </Typist>
            <div className="inputStyle pl-3 text-info">
              &gt;
              <input type="text" placeholder="Add Grammatical Category" 
                className="w-75" ref={this.grammaticalInput} />
            </div>
          </Col>
        </Row>
        <Row className="h3 w-100">{/*Add Description*/}
          <Col xs={12} className="py-2">
            <Typist cursor={{show:false}} st>&gt; Description of the Word</Typist>
            <div className="inputStyle pl-3 text-info">
              &gt;
              <input type="text" placeholder="Optional, 'word' by default" 
                className="w-75" ref={this.descriptionInput}></input>
            </div>
          </Col>
        </Row>
        <Row className="pt-4 pt-md-0 mt-5">{/*Submit button*/}
          <Col xs={12} className="text-center h1 text-primary" role="button" onClick={this.nextWord}>
            <div>&rarr;</div>
            Next Word
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="text-danger text-center pt-2 h4" role="button"
            onClick={()=>this.props.changeState({UploadSection: true, File: false})}>
            <div>&larr;</div>
            Upload Another File
          </Col>{/*Download .txt doc*/}
          <Col xs={6} className="text-success text-center pt-2 h4" role="button" onClick={this.downloadProgress}>
            <div>&darr;</div>
            <div>Download .txt with the work you have so far</div>
            <a className="d-none" ref={this.downloadLink} href="" download="output.txt">I'm hidden, shhhh</a>
          </Col>
        </Row>
        <Row className="w-100 h5 pl-md-4 pl-1 pt-3 pt-md-0">{/*Status Here*/}
          <Col xs={12}>Word Info:</Col>
          <Col xs={4}>Current: {this.index}</Col>
          <Col xs={4}>Total: {this.fileLength}</Col>
          <Col xs={4}>Left: {this.fileLength - this.index}</Col>
        </Row>
      </div>
    );
  }
}
