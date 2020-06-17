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
        <Col xs={{span: 12, order:"last"}} md={{span: 6, order:"first"}}>
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
        <Col xs={{span: 12, order:"first"}} md={{span: 6, order:"last"}} className="w-100 sizeHalfHalf pt-5">
          <pre className="text-primary overflow-hidden pl-3 pl-md-0">
            {figlet.textSync('Site')}
            {figlet.textSync('Under')}
            {figlet.textSync('Development')}
          </pre>
        </Col>
      </Row>
    )
  }
}
