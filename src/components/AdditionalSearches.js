/**
 * Created by tomaszwojcik on 19.07.17.
 */
import React from 'react'
import EventCategories from "./EventCategories"
import TimeSlider from "./TimeSlider"
import LocationSlider from "./LocationSlider"
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'
import {CSSTransitionGroup} from 'react-transition-group'
import './AddtionalSearches.css'

export default class AdditionalSearches extends React.Component {
  constructor() {
    super();
    this.state = {show: false};
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

          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}>
            {
              this.state.show === false ?
                null :
                <div>
                  <Row>
                    <TimeSlider/>
                    <LocationSlider/>
                  </Row>
                  <Row>
                    <EventCategories/>
                  </Row>
                </div>
            }
          </CSSTransitionGroup>

        </Grid>
      </div>
    )
  }
}

