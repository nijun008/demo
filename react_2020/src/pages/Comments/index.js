import React, { Component } from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'

import './index.css'

class Comment extends Component {

  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }

  componentWillMount() {
    this._loadComment()
  }


  _loadComment() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      let commentList = JSON.parse(comments)
      this.setState({ commentList })
    }
  }

  _saveComment(list) {
    localStorage.setItem('comments', JSON.stringify(list))
  }

  submitComment({ userName, content, createdTime }) {
    if (!userName || !content) {
      alert('请填写用户名和评论类容！')
      return
    }

    let list = [...this.state.commentList, { userName, content, createdTime }]
    this.setState({
      commentList: list
    })

    this._saveComment(list)
  }

  deleteHandle(index) {
    let list = this.state.commentList
    list.splice(index, 1)

    this.setState({
      commentList: list
    })

    this._saveComment(list)
  }

  render() {
    return (
      <div className="comment-wrap">
        <CommentInput submitComment={ this.submitComment.bind(this) }></CommentInput>
        <CommentList deleteHandle={ this.deleteHandle.bind(this) } commentList={ this.state.commentList }></CommentList>
      </div>
    )
  }
}

export default Comment