import React from 'react'
import './App.css'
import MainMenu from './MainMenu'
import SearchEngine from './SearchEngine'
import TimeSlider from './TimeSlider'
import LocationSlider from './LocationSlider'
import SearchResults from './SearchResults'
import EventCategories from './EventCategories'
import EventCalendar from "./EventCalendar";

export default class App extends React.Component {
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


