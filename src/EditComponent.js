import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleUpdate = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;

        const data = {
            newTitle,
            newMessage
        };

        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data})
    }
    render() {
        return (
            <div className="EditComponent">
                <form onSubmit={this.handleUpdate}>
                    <input className="name" required type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter post title" /><br /><br />
                    <textarea className="message" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} required rows="10" placeholder="Enter Post" /><br /><br />
                    <button className="upate-btn">Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);