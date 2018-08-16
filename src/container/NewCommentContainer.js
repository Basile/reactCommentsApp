import { connect } from 'react-redux';
import NewComment from '../component/NewComment';
import { createComment } from '../redux/thunks';

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => {
            return dispatch(createComment(comment));
        }
    };
};

const NewCommentContainer = connect(mapStateToProps, mapDispatchToProps)(NewComment);

export default NewCommentContainer;
