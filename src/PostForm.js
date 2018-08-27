import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }


    render() {
        return (
            <div className="PostForm">
                <div className="post-container">
                    <h1 className="header">Create Post</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input className="name" required type="text" ref={(input) => this.getTitle = input} placeholder="Enter post title" /><br /><br />
                        <textarea className="message" ref={(input) => this.getMessage = input} required rows="10" placeholder="Enter Post" /><br /><br />
                        <button className="btn">Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(PostForm);