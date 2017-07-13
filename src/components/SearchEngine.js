/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import { connect } from 'react-redux'
import {Navbar,
        FormGroup,
        FormControl} from 'react-bootstrap'
import './SearchEngine.css'
import { updateSearchPhrase } from '../state/searchengine'

const SearchEngine = props => (
  <FormControl
    value={props.searchPhrase}
    onChange={props.update}
    // style={{marginBottom: 20}}
  />
)

export default connect(
  state => ({
    searchPhrase: state.searchengine.searchPhrase
  }),
  dispatch => ({
    update: event => dispatch(updateSearchPhrase(event.target.value))
  })
)(SearchEngine)

// export default class SearchEngine extends React.Component {
//   render() {
//     return (
//       <Navbar>
//             <FormGroup className="searchbar">
//               <FormControl type="text" placeholder="Search" />
//             </FormGroup>
//       </Navbar>
//     )
//   }
// }
