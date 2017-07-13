/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react';
import DetailsIntro from "./DetailsIntro";
import DetailsDescription from "./DetailsDescription";
import Geolocation from "./Geolocation";
import EventCalendar from "./EventCalendar";
import MainMenu from "./MainMenu"
import Time from 'react-time'
import { PageHeader } from 'react-bootstrap'
import MainSlider from './MainSlider'
import { connect } from 'react-redux'
import {Grid,
  Row,
  Col}
  from 'react-bootstrap'
import './SearchResults.css'
import { fetchSearchResults } from '../state/searchresults'

export default connect(
  state => ({
    searchresults: state.searchresults
  }),
  dispatch => ({
    fetchSearchResults: () => dispatch(fetchSearchResults())
  })
)(
  class SearchResults extends React.Component {

    componentWillMount() {
      this.props.fetchSearchResults()
    }

    render() {
      const { data, fetching, error } = this.props.searchresults;
      let now = new Date();
      return (
        <div>
          <MainSlider/>
          <Grid>
            <h1>Jesteś w Trójmieście <small>zobacz co się dzieje</small></h1>
            <h2><small>szczegóły Twojej imprezy w dniu </small><Time value={now} format="YYYY/MM/DD" /></h2>
          </Grid>
          <Grid>
              { error === null ? null : <p>{error.message}</p> }
              { fetching === false ? null : <p>Fetching data...</p>}
              {
                data !== null && data.slice(1,2).map(
                  event => (

                <Row className="show-grid">
                  <Col xs={6} md={6}>

                <h2>Rodzaj imprezy: {event.category}</h2>
                <h1>Kiedy: {event.startdate}</h1>
                <h3>Godzina: {event.starttime}</h3>
                <h1>Za ile wjazd: {event.cost} PLN</h1>
                    <p> </p>
                    <p> </p>
                    <p>szczegóły Twojej imprezy</p>
                    {event.place}
                    {event.city}

                </Col>

                <Col xs={6} md={6}>

                  <Geolocation/>

                  </Col>
                </Row>
                  )
                )
              }
          </Grid>

        </div>
      )
    }
  }
)
