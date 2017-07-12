import React from "react";
import GoogleMapReact from "google-map-react";
import {connect} from "react-redux";
import {fetchDetailsMap} from "../state/detailsmap";


const AnyReactComponent = ({text}) => <div>{text}</div>;

export default connect(
  state => ({
    detailsmap: state.detailsmap
  }),
  dispatch => ({
    fetchDetailsMap: () => dispatch(fetchDetailsMap())
  })
)(
  class DetailsMap extends React.Component {

    static defaultProps = {
      center: {lat: 20.4033754, lng: 18.5700186},
      zoom: 14
    };

    componentWillMount() {
      this.props.fetchDetailsMap()
    }

    render() {
      const {data, fetching, error} = this.props.detailsmap;
      return (
        <div>
          { error === null ? null : <p>{error.message}</p> }
          {
            fetching === false ? null : <p>Fetching data...</p>
          }
          <div className="center-block" style={{width: 600, height: 600,}}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              {
                data !== null && data.map(
                  event => (


                    <AnyReactComponent
                      lat={parseFloat(event.lat)}
                      lng={parseFloat(event.lng)}
                      text={event.place}
                    />

                  )
                )
              }
            </GoogleMapReact>
          </div>
        </div>
      )
    }
  }
)



