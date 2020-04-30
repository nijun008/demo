import React, { Component } from 'react'
import Comment from './Comment'

class List extends Component {

  static defaultProps = {
    commentList: []
  }

  deleteHandle(index) {
    this.props.deleteHandle(index)
  }

  render() {
    return (
      <div className="list-box">
        { 
          this.props.commentList.length > 0 
          ? this.props.commentList.map((comment, index) => <Comment  key={index} comment={ comment } commentIndex={index} deleteHandle={ this.deleteHandle.bind(this) }></Comment>)
          : <span className="no-data">暂无评论</span>
        }
      </div>
    )
  }
}

export default List