import {
  createStore,
  combineReducers
} from 'redux'
import details from './state/details'





const reducer = combineReducers({
  details
})


const store = createStore(reducer,
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store