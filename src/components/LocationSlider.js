/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Col} from 'react-bootstrap'

export default class LocationSlider extends React.Component {

  render() {
    return (

      <Col xs={12} sm={6}><h3>Wybierz odległość</h3><Slider/></Col>
    )
  }
}
