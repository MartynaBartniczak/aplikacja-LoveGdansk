/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react';
import DetailsIntro from "./DetailsIntro";
import DetailsDescription from "./DetailsDescription";
import DetailsMap from "./DetailsMap";
import EventCalendar from "./EventCalendar";
import MainMenu from "./MainMenu"
import Time from 'react-time'
import { PageHeader } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Grid,
  Row,
  Col,
  Thumbnail,
  Button} from 'react-bootstrap'
import './SearchResults.css'
import { Link } from 'react-router-dom'
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
        <div className="mainresults">
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

                <h2>Impreza: {event.category}</h2>
                <h3>Kiedy: {event.startdate} | Godzina: {event.starttime}</h3>
                <h4>Za ile wjazd: {event.cost} PLN</h4>
                <p>{event.place} | {event.city}  </p>

                </Col>

                <Col xs={6} md={6}>

                  <h2>Impreza: {event.category}</h2>
                  <h3>Kiedy: {event.startdate} | Godzina: {event.starttime}</h3>
                  <h4>Za ile wjazd: {event.cost} PLN</h4>
                  <p>{event.place} | {event.city}  </p>

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
