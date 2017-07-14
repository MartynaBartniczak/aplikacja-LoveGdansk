/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Grid } from 'react-bootstrap'
import './EventCalendar.css'
import { connect } from 'react-redux'
import { add } from '../state/calendarAdd'
import {fetchSearchResults} from '../state/searchresults'


BigCalendar.momentLocalizer(moment);

export default connect(
  state => ({
      favouriteEventIds: state.calendarAdd.favouriteEventId
    }),
  dispatch => ({
    fetchSearchResults: () => dispatch(fetchSearchResults()),
    addToFav: id => dispatch(add(id))
  })

)(
class EventCalendar extends React.Component {
  render() {
    return (
      <div style={{height:500}}>
        <BigCalendar
          events={[]}
        />
      </div>
    );
  }
}
)