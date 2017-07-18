/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import { connect } from 'react-redux'
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'
import { fetchEventCategories } from '../state/eventcategories'
import './EventCategories.css'
import {toggleCategory} from '../state/categoryButtons'

import categories from '../_utils/categories'
import ToggleDisplay from 'react-toggle-display';

export default connect(
  state => ({
      activeCategoryNames:state.categoryButtons.activeCategoryNames
    }),
  dispatch => ({
    activateCategory: categoryName =>dispatch(toggleCategory(categoryName))
  })
)(
class EventCategories extends React.Component {
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
      <div className="EventCategories">
          <p className="App-intro">
              <Button
                  onClick={ () => this.handleClick() }
                  bsStyle="default">
                  Pokaż filtry dodatkowe</Button>
          </p>
          <ToggleDisplay show={this.state.show}>
          <h2><small>Sprawdź swoją ulubioną muzę!</small></h2>
          <Grid>
          <Row>
            {
              Object.keys(categories).map(
                key => (
                  <Col xs={6} sm={4} className="padded">
                    <Button
                      onClick ={() => this.props.activateCategory(key)}
                      bsClass="btn-block btn-warning btn-lg btn-new"
                      active ={this.props.activeCategoryNames.includes(key)}
                      data-category={key}
                    >
                      {categories[key]}
                    </Button>
                  </Col>
                )
              )
            }
          </Row>
        </Grid>
          </ToggleDisplay>
      </div>
    )
  }
}
)
