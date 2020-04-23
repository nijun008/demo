import React, { Component } from 'react'
import Input from './components/input'
import List from './components/list'

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

  render() {
    return (
      <div className="comment-wrap">
        <Input submitComment={ this.submitComment.bind(this) }></Input>
        <List commentList={ this.state.commentList }></List>
      </div>
    )
  }
}

export default Comment