/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {ButtonToolbar, Button,Grid, Row, Col} from 'react-bootstrap'
import './EventCategories.css'


export default class EventCategories extends React.Component {

    state = {
      activeFilterNames:[]
    }

    handleClick = (event) => this.setState({
      activeFilterNames: this.state.activeFilterNames.concat(event.target.innerText)
    })



  render() {
    return (
      <div className="EventCategories">
        <Grid>
          <Row>
            <ButtonToolbar>
              <Col xs={4}><Button  onClick={this.handleClick} bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Techno")}>Techno</Button></Col>
              <Col xs={4}>
                <Button
                  onClick={this.handleClick}
                  bsClass="btn-block btn-warning btn-lg"
                  active={this.state.activeFilterNames.includes("Rock")}
                >
                  Rock
                </Button>
              </Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("House")}>House</Button></Col>

            </ButtonToolbar>
          </Row>
          <Row>
            <ButtonToolbar>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Blues")}>Blues</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Drum&Bass")}>Drum&Bass</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Hip-Hop")}>Hip-Hop</Button></Col>
            </ButtonToolbar>
          </Row>
          <Row>
            <ButtonToolbar>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Disco Polo")}>Disco Polo</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Metal")}>Metal</Button></Col>
              <Col xs={4}><Button bsClass="btn-block btn-warning btn-lg" active={this.state.activeFilterNames.includes("Alternative")}>Alternative</Button></Col>
            </ButtonToolbar>
          </Row>
        </Grid>
      </div>
    )
  }
}

