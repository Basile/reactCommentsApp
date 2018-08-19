import { connect } from 'react-redux';
import ExistingComment from '../component/ExistingComment';
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

const ExistingCommentContainer = connect(mapStateToProps, mapDispatchToProps)(ExistingComment);

export default ExistingCommentContainer;
