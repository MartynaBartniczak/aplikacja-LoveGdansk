import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Map from 'google-maps-react'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class DetailsMap extends React.Component {

  static defaultProps = {
    center: {lat: 54.4033754, lng: 18.5700186},
    zoom: 12
  };


  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      ><h1>DetailsMap</h1>
        <AnyReactComponent
          lat={54.4033754}
          lng={18.5700186}
          text={''}
        />
      </GoogleMapReact>


    )
  }
}