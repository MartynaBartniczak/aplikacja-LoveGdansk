import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import App from "./components/App";
import Auth from './components/Auth';
import "react-fontawesome";
import { LoginLink } from 'react-stormpath';
import firebase from 'firebase'
import {syncUser} from './state/auth'
import registerServiceWorker from './registerServiceWorker';



firebase.initializeApp({
  apiKey: "AIzaSyAUN0F63ycOYJEde2PDXs7f2b2_sdP9Ku4",
  authDomain: "jfdd7-mkapz-app.firebaseapp.com",
  databaseURL: "https://jfdd7-mkapz-app.firebaseio.com",
  projectId: "jfdd7-mkapz-app",
  storageBucket: "jfdd7-mkapz-app.appspot.com",
  messagingSenderId: "834845185297"
})

firebase.auth().onAuthStateChanged(
  user => {
    store.dispatch(
      syncUser({
        email: user.email,
        displayName: user.displayName
      })
    )
  }
)

ReactDOM.render(
  <Provider store={store}>

      <App/>

  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();