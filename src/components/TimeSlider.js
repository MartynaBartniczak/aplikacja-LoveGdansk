o kurc/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {Col} from 'react-bootstrap'
import moment from 'moment'
import {connect} from 'react-redux'

import { updateSearchDate } from '../state/searchFilters'

export default connect(
  state => ({
    searchDate: state.searchFilters.searchDate
  }),
  dispatch => ({
    updateSearchDate: (searchDate) => dispatch(updateSearchDate(searchDate))
  })
)(
  class TimeSlider extends React.Component {
  render() {
    return (
      <Col xs={12} sm={6}>
        <h3>Wybierz datę:</h3>
        <p>{moment().add(this.props.searchDate, 'days').format('L')}</p>
        <Slider min={0} max={10} value={this.props.searchDate} onChange={this.props.updateSearchDate} />
      </Col>
    )
  }
}
)
