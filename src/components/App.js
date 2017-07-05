import React, { Component } from 'react';
import './App.css';
import MainMenu from './MainMenu'
import SearchEngine from './SearchEngine'
import TimeSlider from './TimeSlider'
import LocationSlider from "./LocationSlider";
import SearchResults from "./SearchResults";
import EventCategories from "./EventCategories";

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchEngine />
        <TimeSlider/>
        <LocationSlider/>
        <SearchResults/>
        <EventCategories/>
        <MainMenu />
      </div>
    );
  }
}

export default App;
