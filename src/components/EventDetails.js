/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react';
import Geolocation from "./Geolocation";
import Time from 'react-time'
import MainSlider from './MainSlider'
import { connect } from 'react-redux'
import {Grid,
  Row,
  Col,
Panel,
  Accordion}
  from 'react-bootstrap'
import './SearchResults.css'
import { fetchSearchResults } from '../state/searchresults'
import FontAwesome from "react-fontawesome";

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
            <h2><small>Dzisiaj jest </small><Time value={now} format="YYYY/MM/DD" /></h2>
            <hr/>
          </Grid>
          <Grid>
              { error === null ? null : <p>{error.message}</p> }
              { fetching === false ? null : <p>Fetching data...</p>}
              {
                data !== null && data.slice(1,2).map(
                  event => (

                <Row className="show-grid">
                  <Col xs={6} md={6}>

                    <h3>Rodzaj imprezy: <b>{event.category}</b></h3>
                    <br/><FontAwesome className="fa fa-clock-o" size='2x' />
                    <h2>Kiedy: <b>{event.startdate}</b></h2>
                    <h2>Godzina: <b>{event.starttime}</b></h2>
                    <h2>Za ile wjazd: <b>{event.cost} PLN</b></h2>
                    <br/><FontAwesome className="fa fa-location-arrow" size='2x' />
                    <h4><small>SZCZEGÓŁY TWOJEJ IMPREZY:</small></h4>
                    <h4><small>Klub: </small>{event.place}</h4>
                    <h4><small>Miasto: </small>{event.city}</h4>
                    <br/>
                    <Accordion>
                      <Panel header="więcej o imprezie"eventKey="1">
                        {event.place}
                      </Panel><br/>
                      <Panel header="więcej o klubie" eventKey="2">
                        {event.place}
                      </Panel>
                    </Accordion>
                </Col>
                <Col xs={6} md={6}>
                  <Geolocation />
                  </Col>
                </Row>
                  )
                )
              }
            <hr/>
          </Grid>
        </div>
      )
    }
  }
)
