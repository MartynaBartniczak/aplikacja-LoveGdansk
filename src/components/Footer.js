/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import './Footer.css'
import {Col} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="mainbottom">
      <footer className="footer">

          <Col xs={6} md={6}>
            <span className="allrights">2017 © MKAPZ. Wszelkie prawa zastrzeżone. </span>
          </Col>
          <Col xs={6} md={6}>
            <FontAwesome className="fa fa-facebook" size='1x' />&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesome className="fa fa-twitter" size='1x' />
          </Col>
      </footer>
      </div>
    )
  }
}