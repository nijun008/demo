import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      content: ''
    }
  }

  componentWillMount() {
    let userName = localStorage.getItem('userName') || ''
    this.setState({ userName })
  }

  componentDidMount() {
    this.textarea.focus()
  }

  inputChange(stateKey, e) {
    this.setState({
      [stateKey]: e.target.value
    })
  }
  
  submitComment(e) {
    localStorage.setItem('userName', this.state.userName)
    this.props.submitComment({
      userName: this.state.userName,
      content: this.state.content,
      createdTime: +new Date()
    })
  }

  render() {
    return (
      <div className="input-box">
        <div className="input-row">
          <label htmlFor="userInput">用户名：</label>
          <input id="userInput" value={this.state.userName} onChange={this.inputChange.bind(this, 'userName')}></input>
        </div>
        <div className="input-row">
          <label htmlFor="contentInput">评论内容：</label>
          <textarea 
            ref={(textarea) => this.textarea = textarea} 
            id="contentInput" 
            value={this.state.content} 
            onChange={this.inputChange.bind(this, 'content')}>
          </textarea>
        </div>
        <div className="input-row justify-end">
        <label> </label>
          <button className="content-btn" onClick={ this.submitComment.bind(this) }>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput