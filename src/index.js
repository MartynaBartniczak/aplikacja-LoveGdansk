import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import App from "./components/App";
import "react-fontawesome";
import { LoginLink } from 'react-stormpath';
import firebase from 'firebase'


firebase.initializeApp({
  apiKey: "AIzaSyCCIYZTEiOvWsmHy9F3s1RNuKh0YYDEW1g",
  authDomain: "jfdd7-app-jeziorski.firebaseapp.com",
  databaseURL: "https://jfdd7-app-jeziorski.firebaseio.com",
  projectId: "jfdd7-app-jeziorski",
  storageBucket: "jfdd7-app-jeziorski.appspot.com",
  messagingSenderId: "385655041946"
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
