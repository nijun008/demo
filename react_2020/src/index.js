import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Comment from './commentApp'

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

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Comment />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
