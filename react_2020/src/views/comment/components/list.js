import React, { Component } from 'react'
import Item from './item'

class List extends Component {

  static defaultProps = {
    commentList: []
  }

  render() {
    return (
      <div className="list-box">
        { 
          this.props.commentList.length > 0 
          ? this.props.commentList.map((comment, index) => <Item  key={index} comment={ comment }></Item>)
          : <span className="no-data">暂无评论</span>
        }
      </div>
    )
  }
}

export default List