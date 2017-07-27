import React from "react";
import FontAwesome from "react-fontawesome";
import DetailMap from "./DetailMap";
import Time from "react-time";
import "./EventDetail.css";
import {Accordion, Carousel, Col, Grid, Panel, Row} from "react-bootstrap";
import {favEvent} from '../state/favevent'

export default class EventDetail extends React.Component {

  state = {
    events: []
  };

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/music.json'
    ).then(
      response => response.json()
    ).then(
      events => this.setState({
        events
      })
    )
  }

  render() {
    let now = new Date();
    const eventId = parseInt(this.props.match.params.eventId, 10);
    const event = this.state.events.find(
      event => event.id === eventId
    );

    if (event === undefined) {
      return (
        <div>
          <h1>Not found yet...</h1>
        </div>
      )
    }

    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img width={1920} height={450} alt="1900x450" src={event.image}/>
            <Carousel.Caption>
              <h1>{event.category} | Zaczynamy o {event.starttime}</h1>
              <h3>Sprawdź, co ciekawego dzieje się wokół Ciebie.</h3>
              <p>{event.city} | {event.place}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Grid>
          <h1 classID="event_detail_h1" style={{color:'white'}}>Jesteś w Trójmieście <small classID="event_detail_small">zobacz co się dzieje</small></h1>
          <h2><small>Dzisiaj jest: </small><Time value={now} format="YYYY - MM - DD" /></h2>
          <hr/>
        </Grid>
        <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={6}>
                    <h2 classID="event_detail_h2" style={{color:'white'}}><small>Wybrałeś imprezę:</small> <b>{event.category}</b></h2>
                    <br/><FontAwesome className="fa fa-clock-o" size='2x' />
                    <h2><small>Kiedy:</small> <b>{event.startdate}</b></h2>
                    <h2><small>Godzina:</small> <b>{event.starttime}</b></h2>
                    <h2><small>Za ile wjazd:</small> <b>{event.cost} PLN</b></h2>
                    <br/><FontAwesome className="fa fa-location-arrow" size='2x' />
                    <h4><small style={{color:'white'}}>SZCZEGÓŁY TWOJEJ IMPREZY:</small></h4>
                    <h4 style={{color:'white'}}><small>Klub: </small>{event.place}</h4>
                    <h4 style={{color:'white'}}><small>Miasto: </small>{event.city}</h4>
                    <br/>
                    <Accordion>


                      <Panel header="więcej o klubie" eventKey="2" trigger="click">
                        {event.place}
                      </Panel>

                      <Panel header="więcej o imprezie"eventKey="1" classID="event_detail_toggle" trigger="click">
                        {event.place}
                      </Panel><br/>

                    </Accordion>
                  </Col>
                  <Col xs={12} md={6}>
                    <DetailMap event={{lat: event.lat, lng: event.lng}}/>
                  </Col>
                </Row>
          <hr/>
        </Grid>
      </div>


    )
  }
}