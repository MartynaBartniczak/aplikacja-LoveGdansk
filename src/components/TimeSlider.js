/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Col} from 'react-bootstrap'
import moment from 'moment'

export default class TimeSlider extends React.Component {
  state = {
    sliderValue: 0
  }

  handleChange = value => this.setState({
    sliderValue: value
  })

  render() {
    return (
      <Col xs={12} sm={6}><h3>Wybierz datę {moment().add(this.state.sliderValue, 'days').calendar()}</h3>
        <Slider min={0} max={10} value={this.state.sliderValue} onChange={this.handleChange} boolean={false}/>
      </Col>
    )
  }
}
