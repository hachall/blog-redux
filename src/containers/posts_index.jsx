import React, { Component } fron 'react';
impot { Link } from 'react-router-dom;'

class PostsIndex extends Component {
  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

export default PostsIndex;
