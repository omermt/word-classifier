import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './style.css';


/*
  This component will be responsible for animation a simple loadingBarbar,
  it just animate, but doesn't really shows any progress.

  This component automatically deactivate it's animation when the component
  is unmounted.
*/
export default class LoadingBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentBar: 0 //Goes from 0 to 12, initial state
    }

    this.theAnimation = this.theAnimation.bind(this);
  }

  theAnimation(){
    this.setState((prevState, Props) =>{
      if (prevState.currentBar === 12) return {currentBar: 0};
      return {currentBar: (prevState.currentBar + 1)};
    });
  }

  componentDidMount(){
    this.animationInterval = setInterval(this.theAnimation, 200);
  }

  componentWillUnmount(){
    clearInterval(this.animationInterval);
    console.log("Loading Animation stopped");
  }

  render(){
    return (
      <Row className="pt-5">
        <Col className="pt-5">
          <div>
            <Row noGutters>
              <Col xs={12} md={{span: 8, offset: 2}} className="theBar w-100">
                <Row className="h-100" noGutters>
                <Col xs={1} className={(this.state.currentBar === 1 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 2 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 3 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 4 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 5 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 6 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 7 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 8 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 9 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 10 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 11 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                <Col xs={1} className={(this.state.currentBar === 12 ? 'setBorder bg-success': 'setBorder')}>
                </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}
