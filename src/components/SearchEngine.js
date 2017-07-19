/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import { connect } from 'react-redux'
import {Grid,
        FormGroup,
        FormControl,
        ControlLabel,
        Col,
        Button
        }
from 'react-bootstrap'
import './SearchEngine.css'
import { updateSearchPhrase } from '../state/searchengine'

const SearchEngine = props => (
  <Grid>
    <FormGroup>
        <Col sm={2}>
        </Col>
        <Col sm={8}>
            <FormControl
                value={props.searchPhrase}
                onChange={props.update}
                className="searchbarengine"
                placeholder="szukaj imprezy w swojej okolicy"
            />
        </Col>
        <Col sm={2}>
        </Col>
     </FormGroup>
  </Grid>
)



export default connect(
  state => ({
    searchPhrase: state.searchengine.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(SearchEngine)