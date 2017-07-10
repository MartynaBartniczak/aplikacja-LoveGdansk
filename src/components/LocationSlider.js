/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Col} from 'react-bootstrap'

export default class LocationSlider extends React.Component {
  state = {
    sliderValue: 0
  }

  handleChange = value => this.setState({
    sliderValue: value
  })

  render() {
    return (

      <Col xs={12} sm={6}><h3>Wybierz odległość</h3><p>{this.state.sliderValue} km</p>
        <Slider min={0} max={10} value={this.state.sliderValue} onChange={this.handleChange}/></Col>
    )
  }
}
