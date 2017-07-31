import React from "react";
import GoogleMapReact from "google-map-react";
import {connect} from "react-redux";
import {fetchDetailsMap} from "../state/detailsmap";
import "./DetailsMap.css";
import FontAwesome from "react-fontawesome";


const AnyReactComponent = ({text}) => <div className="markers"><span className="markery">{text}</span><FontAwesome className="fa fa-map-marker" size='5x' /></div>;


export default connect(
  state => ({
    detailsmap: state.detailsmap,
    coords: state.geolocation.position,
    searchPhrase: state.searchengine.searchPhrase
  }),
  dispatch => ({
    fetchDetailsMap: () => dispatch(fetchDetailsMap())
  })
)(
  class DetailsMap extends React.Component {

    static defaultProps = {
      center: {lat: 20.4033754, lng: 18.5700186},
      zoom: 11,
    };


    componentWillMount() {
      this.props.fetchDetailsMap()
    }

    render() {

      const {data, fetching, error} = this.props.detailsmap;
      const { searchPhrase } = this.props
      return (
        <div>
          { error === null ? null : <p>{error.message}</p> }
          {
            fetching === false ? null : <p>Fetching data...</p>
          }
          <div className="center-block" style={{maxWidth:'100%', height: 600,}}>
            <GoogleMapReact
              center={this.props.coords}
              defaultZoom={this.props.zoom}
              options={{scrollwheel: false}}
              apiKey={'AIzaSyD91qKDKvraWUaYomGzmd4cLuR653anaDs'}
            >
              {
                data !== null && data.filter(event => searchPhrase.toLowerCase() === '' ? true : event.place.toLowerCase().includes(searchPhrase)).map(
                  event => (
                    <AnyReactComponent
                      lat={parseFloat(event.lat)}
                      lng={parseFloat(event.lng)}
                      text={event.place}

                    />
                  )
                )
              }

              <AnyReactComponent
                {...this.props.coords }
                text="Tu jesteś"
              />
            </GoogleMapReact>
          </div>
        </div>

      )
    }
  }
)



