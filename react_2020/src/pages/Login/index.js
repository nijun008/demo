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

  userNameChange = (e, formKey) => {
    let userName = e.target.value
    this.setState({
      userName
    })
  }

  passwordChange = (e, formKey) => {
    let password = e.target.value
    this.setState({
      password
    })
  }

  loginHandle = () => {

    this.loginForm.validateFields().then(values => {
      console.log(values)
      this.props.history.push('/')
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Row className="login-wrap" justify="center" align="middle">
          <div className="login-box">
            <h2 className="title">Library Admin</h2>
            <Form ref={(loginForm) => this.loginForm = loginForm } className="login-form" onFinish={ this.loginHandle }>
              <Form.Item name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input 
                  prefix={<UserOutlined className="login-input-icon" />} 
                  placeholder="用户名"
                  onChange={ this.userNameChange }>
                </Input>
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input 
                  prefix={<LockOutlined className="login-input-icon" />} 
                  placeholder="密码" 
                  type="password"
                  onChange={ this.passwordChange }>
                </Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="login-btn" onClick={ this.loginHandle }>登录</Button>
              </Form.Item>
            </Form>
          </div>
        </Row>
      </div>
    )
  }
}

export default Login