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
      favouriteEventIds: state.calendarAdd.favouriteEventId,
      events: state.searchresults
    }),
  dispatch => ({
    fetchSearchResults: () => dispatch(fetchSearchResults()),
    addToFav: id => dispatch(add(id))
  })

)(
class EventCalendar extends React.Component {

  componentWillMount() {
    this.props.fetchSearchResults()
  }

  render() {
    const events = this.props.events.data === null ? [] : this.props.events.data.filter(event => this.props.favouriteEventIds.includes(event.id)).map(
      event => ({
        allDay: true,
        end: moment(event.startdate),
        start: moment(event.startdate),
        title: event.place
      })
    )
    return (
      <div style={{height:500}}>
        <BigCalendar
          events={events}
        />
      </div>
    );
  }
}
)