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
import {Link} from 'react-router-dom'


BigCalendar.momentLocalizer(moment);

export default connect(
  state => ({
      favouriteEventIds: state.favevent.eventIds || [],
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
        id: event.id,
        allDay: true,
        end: moment(event.startdate),
        start: moment(event.startdate),
        title: event.place
      })
    )
    return (
      <div style={{height:500, marginLeft:'2.5em', marginRight:'2.5em'}}>
        <BigCalendar
                 onSelectEvent={(event) => this.props.history.push('/detale/' + event.id)}
          events={events}
        />
      </div>
    );
  }
}
)