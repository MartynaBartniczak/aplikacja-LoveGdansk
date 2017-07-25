import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

import details from "./state/details";
import distance from "./state/distance";
import searchresults from "./state/searchresults";
import searchengine from "./state/searchengine";
import detailsmap from "./state/detailsmap";
import searchFilters from "./state/searchFilters";
import categoryButtons from "./state/categoryButtons";
import calendarAdd from "./state/calendarAdd";
import persistState from "redux-localstorage";
import geolocation, {set} from "./state/geolocation";
import auth, { initUserSync } from './state/auth'
import favevent from "./state/favevent"
import firebase from 'firebase'


const reducer = combineReducers({
    details,
    searchengine,
    detailsmap,
    searchresults,
    searchFilters,
    categoryButtons,
    auth,
    calendarAdd,
    distance,
    geolocation,
    favevent
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(
        thunk
    ),
  persistState(['calendarAdd','categoryButtons','details','detailsmap','eventcategories','searchengine','searchFilters','searchresults', 'auth'])
));


if (navigator.geolocation !== undefined) {
  navigator.geolocation.getCurrentPosition((position) => {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude, position.coords);
    store.dispatch(set({lat: latitude, lng: longitude}))
  })
}

firebase.initializeApp({
  apiKey: "AIzaSyAUN0F63ycOYJEde2PDXs7f2b2_sdP9Ku4",
  authDomain: "jfdd7-mkapz-app.firebaseapp.com",
  databaseURL: "https://jfdd7-mkapz-app.firebaseio.com",
  projectId: "jfdd7-mkapz-app",
  storageBucket: "jfdd7-mkapz-app.appspot.com",
  messagingSenderId: "834845185297"
})

store.dispatch(initUserSync())


export default store