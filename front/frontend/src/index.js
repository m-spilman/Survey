import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Admin from './Admin'


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))




