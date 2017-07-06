import React from 'react'
import './App.css'
import MainMenu from './MainMenu'
import SearchEngine from './SearchEngine'
import TimeSlider from './TimeSlider'
import LocationSlider from './LocationSlider'
import SearchResults from './SearchResults'
import EventCategories from './EventCategories'
import EventCalendar from "./EventCalendar";
import {Grid,
  Row,
  Col,} from 'react-bootstrap'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <SearchEngine />
            <TimeSlider/>
            <LocationSlider/>
            <SearchResults/>
        <EventCategories/>
        <MainMenu />
          </Row>
        </Grid>
      </div>
    );
  }
}


