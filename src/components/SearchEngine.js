/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import {Navbar,
        FormGroup,
        FormControl} from 'react-bootstrap'
import './SearchEngine.css'

export default class SearchEngine extends React.Component {
  render() {
    return (
      <Navbar>
            <FormGroup className="searchbar">
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
      </Navbar>
    )
  }
}
