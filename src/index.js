import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import EventCategories from "./components/EventCategories";
import EventDetails from "./components/EventDetails";

ReactDOM.render(<EventDetails/>, document.getElementById('root'))
registerServiceWorker()
