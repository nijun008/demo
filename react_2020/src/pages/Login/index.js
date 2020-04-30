import React, { Component } from 'react'
import { Row, Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './index.css'

class Login extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      userName: '',
      password: ''
    }
  }

  loginHandle = () => {
    console.log(this.state.userName)
    console.log(this.state.password)
  }

  render() {
    return (
      <div>
        <Row className="login-wrap" justify="center" align="middle">
          <div className="login-box">
            <h2 className="title">Library Admin</h2>
            <Form name="login_form" className="login-form" onFinish={ this.loginHandle }>
              <Form.Item name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input prefix={<UserOutlined className="login-input-icon" />} placeholder="用户名"></Input>
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input prefix={<LockOutlined className="login-input-icon" />} placeholder="密码"></Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="login-btn">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </Row>
      </div>
    )
  }
}

export default Login