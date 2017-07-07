import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import App from './components/App'
import EventDetails from './components/EventDetails'
import registerServiceWorker from './registerServiceWorker'
import EventCategories from "./components/EventCategories";

ReactDOM.render(<EventDetails/>, document.getElementById('root'))
registerServiceWorker()
