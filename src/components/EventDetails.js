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
import { Button } from 'react-bootstrap'

export default class EventDetails extends React.Component {
  render() {
    let now = new Date()
    return (
      <div className="EventDetails">
      <DetailsIntro/>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        <DetailsDescription/>
              <div>
                <p>Today is <Time value={now} format="YYYY/MM/DD" /></p>
              </div>
        <DetailsMap/>
        <EventCalendar/>
        <MainMenu />
      </div>
    );
  }
}