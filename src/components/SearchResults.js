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
  render() {
    return (
      <div className="mainresults">
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami</h3>
              <p>Ballons party hard</p>
              <p>
                <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                <Button bsStyle="default">Dodaj do kalendarza</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami 2</h3>
              <p>Ballons party hard</p>
              <p>
                <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                <Button bsStyle="default">Dodaj do kalendarza</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami 3</h3>
              <p>Ballons party hard</p>
              <p>
                <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                <Button bsStyle="default">Dodaj do kalendarza</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={12} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami 4</h3>
              <p>Ballons party hard</p>
              <p>
                <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                <Button bsStyle="default">Dodaj do kalendarza</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}