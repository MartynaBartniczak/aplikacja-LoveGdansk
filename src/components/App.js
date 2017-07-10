import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import MainMenu from './MainMenu'
import SearchEngine from './SearchEngine'
import TimeSlider from './TimeSlider'
import LocationSlider from './LocationSlider'
import SearchResults from './SearchResults'
import EventCategories from './EventCategories'
import EventDetails from './EventDetails'
import DetailsMap from "./DetailsMap";
import Geolocation from "./Geolocation";
import EventCalendar from './EventCalendar'
import {Grid,
  Row,
  Col,} from 'react-bootstrap'

const App = () => (
      <Router>
      <div className="App">
        <div>
          <MainMenu/>
          <Route path="/kategorie" component={EventCategories}/>
          <Route path="/kalendarz" component={EventCalendar}/>
          <Route path="/szukaj" component={SearchEngine}/>
          <Route path="/wydarzenia" component={EventCategories}/>
          <Route path="/detale" component={EventDetails}/>
          <Route path="/mapa" component={DetailsMap}/>
        </div>
        <Grid>
          <Row>
            <TimeSlider/>
            <LocationSlider/>
            <SearchResults/>
        <EventCategories/>
          </Row>
        </Grid>

      </div>
      </Router>
    )

export default App
