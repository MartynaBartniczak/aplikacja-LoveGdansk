/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Grid,
  Row,
  Col,} from 'react-bootstrap'

export default class LocationSlider extends React.Component {
  render() {
    return (
      <Col xs={6}><h2>Wybierz odległość</h2><Slider/></Col>
    )
  }
}
