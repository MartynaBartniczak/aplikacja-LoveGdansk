/**
 * Created by tomaszwojcik on 19.07.17.
 */
import React from 'react'
import ToggleDisplay from 'react-toggle-display'
import EventCategories from "./EventCategories"
import TimeSlider from "./TimeSlider"
import LocationSlider from "./LocationSlider"
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'

export default class AdditionalSearches extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div>
        <Grid>
          <Button
            onClick={ () => this.handleClick() }
            bsStyle="btn-block btn-warning btn-md btn-new">
            Filtry dodatkowe
          </Button>
          <ToggleDisplay show={this.state.show}>
          <Row>
            <TimeSlider/>
            <LocationSlider/>
          </Row>
          <Row>
            <EventCategories/>
          </Row>
          </ToggleDisplay>
        </Grid>
      </div>
    )
  }
}

