import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import MainMenu from "./MainMenu";
import SearchResults from "./SearchResults";
import EventCategories from "./EventCategories";
import EventDetails from "./EventDetails";
import DetailsMap from "./DetailsMap";
import EventCalendar from "./EventCalendar";
import {Grid, Row} from "react-bootstrap";
import SearchEngine from "./SearchEngine";
import EventDetail from "./EventDetail";
import AdditionalSearches from "./AdditionalSearches";

const App = () => (
  <Router>
    <div className="App">
      <DetailsMap/>
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
        <Route path="/mapa" component={DetailsMap}/>
        <Route path="/detale/:eventId" component={EventDetail}/>
      </div>
      <div>
      </div>


    </div>
  </Router>
);

export default App
