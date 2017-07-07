import React from 'react'
import './App.css'
import MainMenu from './MainMenu'
import SearchEngine from './SearchEngine'
import TimeSlider from './TimeSlider'
import LocationSlider from './LocationSlider'
import SearchResults from './SearchResults'
import EventCategories from './EventCategories'
import EventCalendar from "./EventCalendar";
import DetailsMap from "./DetailsMap";
import Geolocation from "./Geolocation";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <SearchEngine />
        <TimeSlider/>
        <LocationSlider/>
        <SearchResults/>
        <div style={{width:600, height:600,}}> <DetailsMap/></div>
        <Geolocation/>
        <EventCategories/>
        <MainMenu />
      </div>
    );
  }
}


