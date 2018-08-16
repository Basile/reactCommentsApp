import { connect } from 'react-redux';
import Comment from '../component/Comment';
import { updateComment, deleteComment } from '../redux/thunks';

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateComment: (comment) => {
            return dispatch(updateComment(comment));
        },
        deleteComment: (comment) => {
            return dispatch(deleteComment(comment));
        }
    };
};

const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default CommentContainer;
