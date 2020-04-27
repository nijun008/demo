import  React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { initComments, deleteComment } from '../reducers/comments'

class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    deleteComment: PropTypes.func
  }

  componentWillMount() {
    this._loadComments()
  }

  _loadComments() {
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    this.props.initComments(comments)
  }

  handleDeleteComment(index) {
    const { comments } = this.props
    
    const newComments = [
      ...comments.splice(0, index),
      ...comments.splice(index + 1)
    ]

    localStorage.setItem('comments', JSON.stringify(newComments))

    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <CommentList comments={ this.props.comments } onDeleteComment={ this.handleDeleteComment.bind(this) }></CommentList>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments))
    },

    onDeleteComment: (commentindex) => {
      dispatch(deleteComment(commentindex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)