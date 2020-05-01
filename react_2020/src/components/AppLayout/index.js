import React, { Component } from 'react'
import { Route, Link, Switch, HashRouter } from 'react-router-dom'
import './index.css'

import Comment from '../../pages/Comments'

import { Layout, Menu, Row, Col } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

class MyLayout extends Component {
  state = {
    collapsed: false,
  }

  sliderToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="sider-logo">Logo</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="app-header-wrap" style={{ padding: 0 }}>
            <Row justify="space-between">
              <Col>
                <span className="sider-trigger" onClick={ this.sliderToggle }>
                  { this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                </span>
              </Col>
              <Col className="header-right-box">欢迎, 倪俊</Col>
            </Row>
          </Header>
          <div className="app-main-bg">
            <Content className="app-main-wrap">
              <HashRouter>
                <Switch>
                  <Route path="/" exact component={ () => <div>Home</div> }></Route> 
                  <Route path="/comment" component={ Comment }></Route>
                  <Route path="/about" component={ () => <div>about</div> }></Route>
                  <Route path="*" component={ () => <div>404</div> }></Route>
                </Switch>
              </HashRouter>
            </Content>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout