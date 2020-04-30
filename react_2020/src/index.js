import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Route, Switch, HashRouter } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/login" component={ Login }></Route>
            <Route path="/" component={ AppLayout }></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
