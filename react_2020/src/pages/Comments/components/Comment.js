import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeStr: ''
    }
  }

  componentWillMount() {
    this._refreshTime()

    this.timer = setInterval(() => {
      this._refreshTime()
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  deleteHandle(index) {
    this.props.deleteHandle(index)
  }

  
  _refreshTime() {
    let second = Math.ceil((new Date().getTime() - this.props.comment.createdTime) / 1000)
    let  timeStr = second > 60 ? Math.ceil(second/60) + '分钟前' : second + '秒前'
    this.setState({ timeStr })
  }

  render() {
    const comment = this.props.comment
    return (
      <div className="comment-item-box">
        <div className="comment-item">
          <div className="comment-user"><span>{ comment.userName }</span>:</div>
          <div className="comment-content">{ comment.content }</div>
        </div>
        <div className="comment-time">
          <span>{  this.state.timeStr }</span>
          <span className="comment-del" onClick={ this.deleteHandle.bind(this, this.props.commentIndex) }>删除</span>
        </div>
      </div>
    )
  }
}

export default Item