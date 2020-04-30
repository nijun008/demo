import React, { Component } from 'react'
import { Route, Link, Switch, HashRouter } from 'react-router-dom'
import './index.css'

import Comment from '../../pages/Comments'

import { Layout, Menu } from 'antd'
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
          <div className="sider-logo" />
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
            {
              <div className="sider-trigger" onClick={ this.sliderToggle }>
                { this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
              </div>
            }
          </Header>
          <Content
            className="app-main-wrap"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <HashRouter>
              <Switch>
                <Route path="/" exact component={ () => <div>Home</div> }></Route> 
                <Route path="/comment" component={ Comment }></Route>
                <Route path="/about" component={ () => <div>about</div> }></Route>
                <Route path="*" component={ () => <div>404</div> }></Route>
              </Switch>
            </HashRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout