import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';
import CommentContainer from '../container/Comment';
import CommentThreadContainer from '../container/CommentThread';
import NewCommentContainer from '../container/NewCommentContainer';
import { commentPropType } from "../util/commentPropType";

export default class CommentThread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: props.isExpanded,
            isLoading: false
        };
    }

    componentDidMount() {
        if (this.props.forceLoad) {
            this.loadComments();
        }
    }

    loadComments() {
        this.setState({isLoading: true});
        this.props.getComments(this.props.rootComment.id)
            .finally(() => {
                this.setState({isLoading: false});
            });
    }

    toogleExpanded = () => {
        const newIsExpanded = !this.state.isExpanded;
        if (newIsExpanded) {
            this.loadComments();
        }
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    };

    render() {
        const {
            rootComment,
            childComments
        } = this.props;
        const {
            isExpanded,
            isLoading
        } = this.state;

        return (
            <div className="comment-thread">
                {(rootComment.id > 0) &&
                    <div className="thread-expander" onClick={this.toogleExpanded}>
                        {isExpanded ? <Icon icon='chevron-down'/> : <Icon icon='chevron-right'/>}
                    </div>
                }
                {(rootComment.id > 0) &&
                    <CommentContainer
                        comment={rootComment}
                    />
                }

                {isExpanded && isLoading && <div className="thread-loader">Loading...</div> }
                {isExpanded ?
                    childComments.length ? childComments.map((c) => (
                        <CommentThreadContainer
                            rootComment={c}
                            isExpanded={false}
                        />
                    )) : <span className="no-comments">No comments yet</span>
                : null}

                {isExpanded &&
                    <NewCommentContainer
                        parentComment={rootComment}
                    />
                }
            </div>
        );
    }
}

CommentThread.propTypes = {
    rootComment: commentPropType.isRequired,
    isExpanded: PropTypes.bool.isRequired
};

CommentThread.defaultProps = {
    forceLoad: false
};
