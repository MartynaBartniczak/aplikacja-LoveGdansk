/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.momentLocalizer(moment);

export default class EventCalendar extends React.Component {
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