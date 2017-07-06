/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {ButtonToolbar, Button,Grid, Row, Col} from 'react-bootstrap'
import './EventCategories.css'

export default class EventCategories extends React.Component {
  render() {
    return (
      <div className="EventCategories">
        <Grid>
          <Row>
            <ButtonToolbar>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Techno</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Rock</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>House</Button></Col>

            </ButtonToolbar>
          </Row>
          <Row>
            <ButtonToolbar>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Blues</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Drum&Base</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Hip-Hop</Button></Col>
            </ButtonToolbar>
          </Row>
          <Row>
            <ButtonToolbar>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Disco Polo</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Metal</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active>Alternative</Button></Col>
            </ButtonToolbar>
          </Row>
        </Grid>
      </div>
    )
  }
}


