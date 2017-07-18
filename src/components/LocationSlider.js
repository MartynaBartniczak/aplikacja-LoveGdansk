/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import './LocationSlider.css'
import { updateLocation } from '../state/searchFilters'

export default connect(
 state => ({
   location: state.searchFilters.location
 }),
  dispatch => ({
    updateLocation: (location) => dispatch(updateLocation(location))
  })
)(
  class LocationSlider extends React.Component {
    render() {
      return (

        <Col xs={12} sm={6}>
            <FontAwesome className="fa fa-location-arrow" size='3x' />
            <h3 className="choose_range">Wybierz odległość:</h3>
          <p className="choose_range_km">{this.props.location} km</p>
          <Slider min={1} max={10} value={this.props.location} onChange={this.props.updateLocation}/>
        </Col>
      )
    }
  }
)