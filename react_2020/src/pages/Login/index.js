import React, { Component } from 'react'
import { Row } from 'antd'

import './index.css'

class Login extends Component {
  render() {
    return (
      <div>
        <Row className="login-wrap" justify="center" align="middle">
          <div className="login-box">
            <h2 className="title">登录</h2>
          </div>
        </Row>
      </div>
    )
  }
}

export default Login