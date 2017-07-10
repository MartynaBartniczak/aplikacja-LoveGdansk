import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import {} from 'react-bootstrap'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class DetailsMap extends React.Component {

  static defaultProps = {
    center: {lat: 54.4033754, lng: 18.5700186},
    zoom: 14
  };


  render() {
    return (
      <div style={{width:600, height:600,}}>
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


      </div>

    )
  }
}