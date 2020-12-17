import React, { Component } from 'react'

export default class CommentItems extends Component {
    render() {
        return (
            <div className="commentItems">
                <div className="iUser">
                    <img src={this.props.imgUserComment} alt="" className="img img-fluid img-Avar" />
                    <h5 className="nameUserComment">{this.props.nameUserComment}</h5>
                </div>
                <p className="ct_comment"> {this.props.commentContent} </p>
            </div>
        )
    }
}
