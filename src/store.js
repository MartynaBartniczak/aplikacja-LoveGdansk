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


const reducer = combineReducers({
    details,
    searchengine,
    detailsmap,
    searchresults,
    searchFilters,
    categoryButtons,
    calendarAdd,
    distance,
    geolocation
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(
        thunk
    ),
  persistState(['calendarAdd','categoryButtons','details','detailsmap','eventcategories','searchengine','searchFilters','searchresults'])
));


if (navigator.geolocation !== undefined) {
  navigator.geolocation.getCurrentPosition((position) => {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude, position.coords);
    store.dispatch(set({lat: latitude, lng: longitude}))
  })
}





export default store