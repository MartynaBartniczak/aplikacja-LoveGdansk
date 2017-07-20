/**
 * Created by piotrkasprzycki on 20.07.17.
 */
import React from "react";
import distance from "google-distance";

export default class Distance extends React.Component {
  render() {

    distance.get(
      {
        origin: ['this.props.coords.latitude', 'this.props.coords.longitude'],
        destination: 'San Diego, CA'

      },
      function(err, data) {
        if (err) return console.log(err);
        console.log(data);
      });
  }
}

