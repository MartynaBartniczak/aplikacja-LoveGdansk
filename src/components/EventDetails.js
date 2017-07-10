/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react';
import DetailsIntro from "./DetailsIntro";
import DetailsDescription from "./DetailsDescription";
import DetailsMap from "./DetailsMap";
import EventCalendar from "./EventCalendar";
import MainMenu from "./MainMenu"
import Time from 'react-time'
import { PageHeader } from 'react-bootstrap'
import { connect } from 'react-redux'

export default class EventDetails extends React.Component {
  render() {
    let now = new Date()
    return (
      <div className="EventDetails">
      <DetailsIntro/>
        <div>
          <p>Dzisiaj jest  <Time value={now} format="YYYY/MM/DD" /></p>
        </div>
        <PageHeader>Jesteś w Trójmieście <small>zobacz co się dzieje</small></PageHeader>
        <DetailsDescription/>
        <DetailsMap/>
        <EventCalendar/>
        <MainMenu />
      </div>
    );
  }
}

const EventDetails = ({ value, handleClick }) => (
  <div>
    <h1>Smart Counter</h1>
    <h2>{value}</h2>
    <button onClick={handleClick}>Increment</button>
  </div>
)

export default connect(
  state => ({
    value: state.value
  }),
  dispatch => ({
    handleClick: () => dispatch({ type: 'INCREMENT' })
  })
)(EventDetails)