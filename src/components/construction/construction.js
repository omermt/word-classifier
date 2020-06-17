import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Colossal.js';
import './style.css';

export default class ConstructionComponent extends Component{

  render(){
    figlet.parseFont('Standard', standard);
    /*The Construction Image in ASCII Art*/
    return (
      <Row className="width">
        <Col xs={6}>
          {/*The ASCII Art Image of Construction*/}
          <pre className="text-warning pt-2 sizeHalf">{`
                                  ▗▄▛▀▀▀▜▄▖
                                 ▟▛▘      ▜▙
                                 █         █▖
                                 █▖       ▗█
                               ▞▛▀▀▀▀▀▀▀▀▀▀▀▜█
                               ▞▌           ▞█
     ▄▟▀▀▀▀▀▀▀▀▀▀▜█▛▀▀██▀▀▀▀▀▀▀▀▀▜█▛▀▀██▀▀▀▀▀▀▀▀▀▜█▛▀▀█▛▀▀▀▀▀▀▀▀▀▜█▀▀▜▙▄
    ▟▛          ▗▟▀  ▟▛         ▗█▘  ▟▛         ▗█▘  ▟▛         ▗▛▘ ▗▟▀▀▙
   ▗█          ▄▛▘ ▗▟▀         ▟▛  ▗█▘         ▟▛  ▗█▘         ▟▛  ▄▛▘  █▌
   ▞█        ▗▟▀  ▄▛▘        ▗▟▀  ▟▛         ▗█▘  ▟▛         ▗█▘  ▟▛    █▌
   ▞█       ▗█▘ ▗▟▀         ▄▛▘ ▗▟▀         ▄▛▘ ▗█▘         ▟▛  ▗█▘     █▌
   ▞█      ▟▛  ▗█▘         ▟▛  ▄▛▘        ▗▟▀  ▄▛▘        ▗▟▀  ▟▛       █▌
   ▞█    ▗█▘  ▟▛         ▗█▘  ▟▛         ▗█▘ ▗▟▀         ▄▛▘ ▗▟▀        █▌
   ▞█   ▄▛▘ ▗█▘         ▟▛  ▗█▘         ▟▛  ▗█▘         ▟▛  ▄▛▘         █▌
    █▖▗▟▀  ▄▛▘        ▗▟▀  ▟▛         ▗█▘  ▟▛         ▗█▘  ▟▛           █▘
    ▝██▌ ▗▟▛         ▄█▘ ▗▟▛         ▄█▘ ▗█▌         ▟█  ▗█▌          ▄█▘
       ▀▀▀▀▀▀▀▜█▀▀▀▀▜▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▜█▀▀▀▀█▛▀▀▀▀▀▀▀▘
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
     ▗▄▛▀▀▀▀▀▀▀▀▀▜█▛▀▀██▀▀▀▀▀▀▀▀▀▜█▛▀▀██▀▀▀▀▀▀▀▀▀▜█▛▀▜██▀▀▀▀▀▀▀▀▀██▛▀▜▄▄
    ▟▛          ▗▟▀  ▄▛▘        ▗▟▀  ▟▛         ▗█▘  ▟▛         ▗█▘  ▟▛▀▙
   ▗█          ▗█▘ ▗▟▀         ▄▛▘ ▗▟▀         ▄▛▘ ▗█▘         ▟▛  ▗█▘  █▌
   ▞█         ▟▛  ▗█▘        ▗▟▛  ▄▛▘        ▗▟▀  ▄▛▘        ▗█▘  ▟▛    █▌
   ▞█       ▗█▘  ▟▛         ▗█▘ ▗▟▀         ▄▛▘ ▗▟▀         ▄▛▘ ▗█▘     █▌
   ▞█      ▟▛  ▗█▘         ▟▛  ▗█▘         ▟▛  ▄▛▘        ▗▟▀  ▄▛▘      █▌
   ▞█    ▗▟▀  ▟▛         ▗█▘  ▟▛         ▗█▘  ▟▛         ▗█▘ ▗▟▀        █▌
   ▞█   ▄▛▘ ▗▟▀         ▄▛▘ ▗█▘         ▟▛  ▗█▘         ▟▛  ▗█▘         █▌
    █  ▟▛  ▄▛▘        ▗▟▀  ▄▛▘        ▗▟▀  ▟▛         ▗█▘  ▟▛           █▘
    ▝██▌  ▟▛         ▗█▘ ▗▟▛         ▄█▘ ▗▟▛         ▄█▘ ▗█▘          ▗▟▀
      ▝▀▀▀▀▀▀▀▜█▀▀▀▀█▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▜█▀▀▀▀█▛▀▀▀▀▀▀▀▘
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▞█    ▞▌                                 ▞█    █▌
              ▝▀▀▀▀▀▀▘                                 ▝▀▀▀▀▀▀▘`}</pre>
        </Col>
        <Col xs={6} className="w-100 sizeHalfHalf pt-5">
          <pre className="text-primary overflow-hidden">
            {figlet.textSync('Site')}
            {figlet.textSync('Under')}
            {figlet.textSync('Development')}
          </pre>
        </Col>
      </Row>
    )
  }
}
