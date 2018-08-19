import React from 'react';
import Comment from './Comment';
import { Button, EditableText } from '@blueprintjs/core';
import { commentPropType } from "../util/commentPropType";

export default class ExistingComment extends Comment {

    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            commentText: this.props.comment.text,
            isBeingEdited: false
        });
    }

    edit = () => {
        this.setState({isBeingEdited: true});
        // this.textareaRef.nameInputField.focus();
        console.log(this.textareaRef);
    };

    save = () => {
        const updatedComment = Object.assign({}, this.props.comment, {text: this.state.commentText});
        this.props.updateComment(updatedComment)
            .then(() => {
                this.setState({
                    isBeingEdited: false,
                    error: null
                });
            }, error => {
                this.setState({error});
            });
    };

    delete = () => {
        if (window.confirm('Confirm comment deletion?')) {
            this.props.deleteComment(this.props.comment)
                .then(null, error => {
                    this.setState({error});
                });
        }
    };

    render() {
        const {
            comment
        } = this.props;
        const {
            isBeingEdited,
            error
        } = this.state;

        return (
            <div className="comment">
                {error && this.showError(error)}
                <div className="comment-actions">
                    {isBeingEdited || <Button icon="edit" onClick={this.edit} />}
                    {isBeingEdited && <Button icon="tick" onClick={this.save} />}
                    <Button icon="trash" onClick={this.delete} />
                </div>
                <div className="comment-data">
                    {isBeingEdited ||
                        <div className="comment-text">
                            {comment.text}
                        </div>
                    }
                    {isBeingEdited &&
                        <EditableText
                            ref={this.textareaRef}
                            multiline={true}
                            minLines={2}
                            maxLines={3}
                            defaultValue={comment.text}
                            placeholder="Type comment"
                            onChange={this.onChange}
                        />
                    }
                </div>
            </div>
        )
    }
}

ExistingComment.propTypes = {
    comment: commentPropType.isRequired
};
