/**
 * Created by piotrkasprzycki on 21.07.17.
 */
import React from "react";
import GoogleMapReact from "google-map-react";
import {connect} from "react-redux";
import "./DetailsMap.css";
import FontAwesome from "react-fontawesome";


const AnyReactComponent = ({text}) => <div className="markers"><span className="markery">{text}</span><FontAwesome className="fa fa-map-marker" size='5x' /></div>;


export default connect(
  state => ({
    coords: state.geolocation.position
  })
)(
  class DetailMap extends React.Component {

    static defaultProps = {
      center: {lat: 20.4033754, lng: 18.5700186},
      zoom: 11,
    };

    render() {
      const {event, coords} = this.props;
      const center = coords === null ? null : {lat: (this.props.coords.lat + parseFloat(event.lat))/2, lng: (this.props.coords.lng + parseFloat(event.lng))/2 };
      return (
        <div>
          <div className="center-block" style={{maxWidth:'100%', height: 660,}}>
            <GoogleMapReact
              center={center}
              defaultZoom={this.props.zoom}
              options={{scrollwheel: false}}
              apiKey={'AIzaSyD91qKDKvraWUaYomGzmd4cLuR653anaDs'}
            >
              <AnyReactComponent
                lat={parseFloat(event.lat)}
                lng={parseFloat(event.lng)}
                text="Twoja impreza"

              />
              <AnyReactComponent
                {...this.props.coords }
                text="Jesteś tutaj"
              />
            </GoogleMapReact>
          </div>
        </div>

      )
    }
  }
)