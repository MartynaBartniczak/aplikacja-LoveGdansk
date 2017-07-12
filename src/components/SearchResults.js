/**
 * Created by tomaszwojcik on 05.07.17.
 */
import React from 'react'
import { connect } from 'react-redux'
import {Grid,
        Row,
        Col,
        Thumbnail,
        Button} from 'react-bootstrap'
import './SearchResults.css'
import { Link } from 'react-router-dom'
import { fetchSearchResults } from '../state/searchresults'

export default connect(
  state => ({
    searchresults: state.searchresults,
    location: state.searchFilters.location
  }),
  dispatch => ({
    fetchSearchResults: () => dispatch(fetchSearchResults())
  })
)(
  class SearchResults extends React.Component {

    componentWillMount() {
    this.props.fetchSearchResults()
  }

  render() {
    const { data, fetching, error } = this.props.searchresults
    return (
      <div className="mainresults">
      <Grid>
        <Row>
              { error === null ? null : <p>{error.message}</p> }
               { fetching === false ? null : <p>Fetching data...</p>}
              {
                data !== null && data.filter(item => item.range < this.props.location).map(
                  event => (
                      <Col xs={12} md={6}>
                        <Thumbnail src={event.image}>
                          <h2>Impreza: {event.category}</h2>
                          <h3>Kiedy: {event.startdate} | Godzina: {event.starttime}</h3>
                          <h4>Za ile wjazd: {event.cost} PLN</h4>
                          <p>{event.place} | {event.city}  </p>
                          <p>
                            <Button bsStyle="primary">Zobacz szczegóły</Button>&nbsp;
                            <Button bsStyle="default">Dodaj do kalendarza</Button>
                          </p>
                        </Thumbnail>
                      </Col>
                  )
                )
              }
        </Row>
      </Grid>
      </div>
    )
  }
}
)