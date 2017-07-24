/**
 * Created by piotrkasprzycki on 07.07.17.
 */
import React from "react";
import DetailsMap from "./DetailsMap";
import {connect} from "react-redux";


class Geolocation extends React.Component {

  render() {
      if (this.props.coords === null) {
          return <p>Loading data...</p>
      }
    return <DetailsMap center={{lat: this.props.coords.latitude, lng: this.props.coords.longitude}}/>


  }
}

export default connect(
  state => ({
    coords: state.geolocation.position
  })
)(Geolocation);