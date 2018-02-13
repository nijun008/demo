import React, { Component } from 'react'
import { Button, Icon } from 'antd'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  hanldClick = (e)=> {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div className="header">
        <h1>LOGO</h1>
        <Button type="primary" onClick={ this.hanldClick }><Icon type="link" />更新时间</Button>
        <Button>时间{ this.state.date.toLocaleTimeString() }</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="danger">警告按钮</Button>
      </div>
    );
  }
}

export default Header