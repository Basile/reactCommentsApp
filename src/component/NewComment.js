import React from 'react';
import Comment from './Comment';
import { Button, EditableText } from '@blueprintjs/core';

export default class NewComment extends Comment {

    clear = () => {
        this.setState({
            commentText: '',
            error: null
        });
    };

    save = () => {
        const newComment = Object.assign(
            {},
            {parentId: this.props.parentComment.id},
            {text: this.state.commentText}
        );
        this.props.createComment(newComment)
            .then(this.clear, error => {
                this.setState({error});
            });
    };

    render() {
        const {
            commentText,
            error
        } = this.state;

        return (
            <div className="comment">
                {error && this.showError(error)}
                <div className="comment-actions">
                    {commentText && <Button icon="tick" onClick={this.save} />}
                    {commentText && <Button icon="cross" onClick={this.clear} />}
                </div>
                <div className="comment-data">
                    <EditableText
                        multiline={true}
                        minLines={2}
                        maxLines={3}
                        value={commentText}
                        placeholder="Type new comment"
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )

    }
}