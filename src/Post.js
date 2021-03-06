import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';
 
class Post extends Component {
    render() {
        return (
            <div className="Post">
                <h2 className="post-title">{this.props.post.title}</h2>
                <p className="post-message">{this.props.post.message}</p>
                <div className="buttons">
                    <button className="edit" onClick={() => this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id})}>Edit</button>
                    <button className="delete" onClick={() => this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id})}>Delete</button>
                </div>
            </div>
        );
    }
}

export default connect()(Post);