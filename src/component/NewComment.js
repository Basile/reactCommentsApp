import React from 'react';
import { Button, EditableText } from '@blueprintjs/core';

export default class NewComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentText: ''
        };
    }

    onChange = (value) => {
        this.setState({commentText: value});
    };

    clear = () => {
        this.setState({commentText: ''});
    };

    save = () => {
        const newComment = Object.assign(
            {},
            {parentId: this.props.parentComment.id},
            {text: this.state.commentText}
        );
        this.props.createComment(newComment)
            .then(this.clear);
    };

    render() {
        const {
            commentText
        } = this.state;

        return (
            <div className="comment">
                <div className="comment-actions">
                    {commentText && <Button icon="tick" onClick={this.save} />}
                    {commentText && <Button icon="cross" onClick={this.clear} />}
                </div>
                <div className="comment-form">
                    <EditableText
                        multiline={true}
                        minLines={2}
                        maxLines={3}
                        maxLength={1000}
                        value={commentText}
                        placeholder="Type new comment"
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )

    }
}