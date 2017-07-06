import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import EventCategories from "./components/EventCategories";

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
