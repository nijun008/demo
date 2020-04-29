import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Comment from './commentApp'
import { HashRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>React_demo header</h1>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>2020.04.22 React_demo 《React.js小书》实战评论功能@footer</p>
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About page</h1>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 not found</h1>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/comment">评论</Link></li>
          <li><Link to="/about">关于</Link></li>
          <li><Link to="/404">404</Link></li>
        </ul>
      </div>
    )
  }
}

class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/">去首页</Link>
        <h1>Login</h1>
      </div>
    )
  }
}

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={ Home }></Route> 
            <Route path="/comment" component={ Comment }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="*" component={ NotFound }></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/login" component={ Login }></Route>
            <Route path="/" component={ Layout }></Route>
            <Route path="*" component={ NotFound }></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
