import { connect } from 'react-redux';
import CommentThread from '../component/CommentThread';
import { getComments } from '../redux/thunks';

const getThreadComments = (stateComments, rootComment) => {
    return (stateComments[rootComment.id] !== undefined) ? stateComments[rootComment.id] : [];
};

const mapStateToProps = (state, props) => {
    return {
        childComments: getThreadComments(state.comments, props.rootComment)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (parentId) => {
            return dispatch(getComments(parentId));
        },
        createComment: (data) => {

        },
        updateComment: (id, data) => {

        },
        deleteComment: (id) => {

        }
    };
};

const CommentThreadContainer = connect(mapStateToProps, mapDispatchToProps)(CommentThread);

export default CommentThreadContainer;
