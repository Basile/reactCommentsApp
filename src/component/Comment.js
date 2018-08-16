import React from 'react';
import { Button, EditableText } from '@blueprintjs/core';
import { commentPropType } from "../util/commentPropType";

export default class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBeingEdited: false,
            commentText: props.comment.text
        };
    }

    update = () => {
        this.setState({isBeingEdited: true});
    };

    save = () => {
        const updatedComment = Object.assign({}, this.props.comment, {text: this.state.commentText});
        this.props.updateComment(updatedComment)
            .then(() => {
                this.setState({isBeingEdited: false});
            });
    };

    onChange = (value) => {
        this.setState({commentText: value});
    };

    delete = () => {
        if (window.confirm('Confirm comment deletion?')) {
            this.props.deleteComment(this.props.comment);
        }
    };

    render() {
        const {
            comment
        } = this.props;
        const {
            isBeingEdited
        } = this.state;

        return (
            <div className="comment">
                <div className="comment-actions">
                    {isBeingEdited || <Button icon="edit" onClick={this.update} />}
                    {isBeingEdited && <Button icon="tick" onClick={this.save} />}
                    <Button icon="trash" onClick={this.delete} />
                </div>
                <div className="comment-form">
                    {isBeingEdited ||
                        <div className="comment-text">
                            {comment.text}
                        </div>
                    }
                    {isBeingEdited &&
                        <EditableText
                            multiline={true}
                            minLines={2}
                            maxLines={3}
                            maxLength={1000}
                            defaultValue={comment.text}
                            onChange={this.onChange}
                        />
                    }
                </div>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: commentPropType.isRequired
};
