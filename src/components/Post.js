import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Post extends Component {
  render() {

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>

        <div className="recs">
        <h3 className="recstitle">{'Recent Posts'}</h3>
          <Link to={'/' + 1}>
          <span className="card-title cyan-text">{'Post 1    '}</span>
          </Link>
          <Link to={'/' + 2}>
          <span className="card-title cyan-text">{'Post 2    '}</span>
          </Link>
          <Link to={'/' + 3}>
          <span className="card-title cyan-text">{'Post 3'}</span>
          </Link>
        </div>

      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Post)
