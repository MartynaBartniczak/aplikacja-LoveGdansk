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

export default class SearchResults extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami 2</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami 3</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={6}>
            <Thumbnail src={balloonImg} alt="242x200">
              <h3>Szalona impreza z balonami 4</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    )
  }
}