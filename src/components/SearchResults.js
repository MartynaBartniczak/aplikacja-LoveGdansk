/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {Grid,
        Row,
        Col,
        Thumbnail,
        Button} from 'react-bootstrap'
import './SearchResults.css'

export default class SearchResults extends React.Component {

  componentWillMount() {
    fetch(
      'http://localhost:3000/data/music.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        events: data
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    return (
      <div className="mainresults">
      <Grid>
        <Row>
              { this.state === null ? <p>Fetching data ....</p> : null}
              {
                this.state !== null && this.state.events.slice(1,11).map(
                  event => (
                      <Col xs={12} md={6}>
                        <Thumbnail src={event.image}>
                          <h2>Impreza: {event.category}</h2>
                          <h3>Kiedy: {event.startdate} | Godzina: {event.starttime}</h3>
                          <h4>Za ile wjazd: {event.cost} PLN</h4>
                          <p>{event.place} | {event.city}  </p>
                          <p>
                            <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                            <Button bsStyle="default">Dodaj do kalendarza</Button>
                          </p>
                        </Thumbnail>
                      </Col>
                  )
                )
              }
        </Row>
      </Grid>
      </div>
    )
  }
}