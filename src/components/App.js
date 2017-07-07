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
import {Grid,
  Row,
  Col,} from 'react-bootstrap'

const App = () => (
      <Router>
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
        <div>
          <Route exact path="/wyszukane" component={SearchEngine}/>
          <Route path="/timeslider" component={TimeSlider}/>
          <Route path="/location slider" component={LocationSlider}/>
          <Route path="/searchresult" component={SearchResults}/>
          <Route path="/wydarzenia" component={EventCategories}/>
          <hr/>
          <MainMenu/>
        </div>
      </div>
      </Router>
    )

export default App
