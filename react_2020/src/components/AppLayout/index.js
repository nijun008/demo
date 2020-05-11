import React, { Component } from 'react'
import { Route, Link, Switch, HashRouter } from 'react-router-dom'
import './index.css'

import Comment from '../../pages/Comments'
import UserManage from '../../pages/UserManage'

import { Layout, Menu, Row, Col } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
  ReadOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

// 路由列表
const routeList = [
  { title: '首页', path: '/', icon: <UserOutlined />, component: () => <div>Home</div>, exact: true },
  { title: '评论', path: '/comment', icon: <MessageOutlined />, component: () => <Comment /> },
  { title: '用户管理', path: '/userManage', icon: <UsergroupAddOutlined />, component: () => <UserManage /> },
  { title: 'Book管理', path: '/bookManage', icon: <ReadOutlined />, component: () => <div>Book管理</div> }
]

class MyLayout extends Component {
  state = {
    collapsed: false,
  }

  sliderToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  menuHandle = (menu) => {
    this.props.history.push(menu.path)
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="sider-logo">Logo</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
            {
              routeList.map(menu => (
                <Menu.Item key={ menu.path } icon={ menu.icon} onClick={ () => { this.menuHandle(menu) } } >
                  { menu.title }
                </Menu.Item>
              ))
            }
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
                  {
                    routeList.map(page => (
                      <Route key={page.path} exact={ page.exact || false } path={ page.path } component={ page.component }></Route>
                    ))
                  }
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