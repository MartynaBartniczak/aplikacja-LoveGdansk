/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react';
import DetailsIntro from "./DetailsIntro";
import DetailsDescription from "./DetailsDescription";
import DetailsMap from "./DetailsMap";
import EventCalendar from "./EventCalendar";

export default class EventDetails extends React.Component {
  render() {
    return (
      <div className="EventDetails">
      <DetailsIntro/>
        <DetailsDescription/>
        <DetailsMap/>
        <EventCalendar/>
        <MainMenu />
      </div>
    );
  }
}

