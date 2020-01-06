import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ReviewData from './ReviewData'
import Login from './Login'


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/review" component={ReviewData} />
        <Route path="/admin" component={Login} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))




