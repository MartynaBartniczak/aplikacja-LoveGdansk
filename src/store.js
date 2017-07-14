import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import details from './state/details'
import searchresults from './state/searchresults'
import searchengine from './state/searchengine'
import detailsmap from './state/detailsmap'
import searchFilters from './state/searchFilters'
import categoryButtons from './state/categoryButtons'
import calendarAdd from './state/calendarAdd'


const reducer = combineReducers({
    details,
    searchengine,
    detailsmap,
    searchresults,
    searchFilters,
    categoryButtons,
    calendarAdd
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(
        thunk
    )
))

export default store