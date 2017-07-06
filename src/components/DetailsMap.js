import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class DetailsMap extends React.Component {

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };


  render() {
    return (


      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      ><h1>DetailsMap</h1>
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>

    )
  }
}