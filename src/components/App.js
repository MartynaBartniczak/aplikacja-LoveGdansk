import React from "react";
import { Link, IndexLink } from 'react-router';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import MainMenu from "./MainMenu";
import TimeSlider from "./TimeSlider";
import LocationSlider from "./LocationSlider";
import SearchResults from "./SearchResults";
import EventCategories from "./EventCategories";
import EventDetails from "./EventDetails";
import Geolocation from "./Geolocation";
import EventCalendar from "./EventCalendar";
import {Grid, Row} from "react-bootstrap";
import SearchEngine from './SearchEngine';
import EventDetail from './EventDetail';
import AdditionalSearches from './AdditionalSearches';
import SignUpForm from './SignUpForm1';
import LoginForm from './LoginForm1';

const App = () => (
  <Router>
    <div className="App">
      <div>

        <MainMenu/>
        <SearchEngine/>
        <Grid>
          <hr/>
        </Grid>
        <Route exact path="/" component={() => (
          <Grid>
            <AdditionalSearches/>
            <Row>
              <SearchResults/>
            </Row>
          </Grid>
        )}/>
        <Route path="/kategorie" component={EventCategories}/>
        <Route path="/kalendarz" component={EventCalendar}/>
        <Route path="/wydarzenia" component={EventCategories}/>
        <Route exact path="/detale" component={EventDetails}/>
        <Route path="/mapa" component={Geolocation}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/detale/:eventId" component={EventDetail}/>
      </div>
      <div>
      </div>


    </div>
  </Router>
);

export default App
