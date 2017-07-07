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