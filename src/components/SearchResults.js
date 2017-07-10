/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {Grid,
        Row,
        Col,
        Thumbnail,
        Button} from 'react-bootstrap'

import balloonImg from './img/baloons.jpg';
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
                this.state !== null && this.state.events.slice(1,10).map(
                  event => (
                      <Col xs={12} md={6}>
                        <Thumbnail src={balloonImg} alt="242x200">
                      {event.category}
                          <p>Ballons party hard</p>
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