import {
    setThreadComments,
    addComment,
    updateComment as updateCommentInStore,
    deleteComment as deleteCommentInStore
} from './actions';

export const getComments = (parentId) => (dispatch, getState, commentsApi) => {
    return commentsApi.getComments(parentId)
        .then(comments => {
            dispatch(setThreadComments(parentId, comments));
        })
        .catch(error => {
            console.log("Error getting comments: " + error);
        });
};

export const createComment = (comment) => (dispatch, getState, commentsApi) => {
    const data = {text: comment.text};
    return commentsApi.postComment(comment.parentId, data)
        .then((comment) => {
            dispatch(addComment(comment));
        })
        .catch(error => {
            console.log("Error creating comment: " + error);
        });
};

export const updateComment = (comment) => (dispatch, getState, commentsApi) => {
    const data = {text: comment.text};
    return commentsApi.putComment(comment.id, data)
        .then(() => {
            dispatch(updateCommentInStore(comment));
        })
        .catch(error => {
            console.log("Error updating comment: " + error);
        });
};

export const deleteComment = (comment) => (dispatch, getState, commentsApi) => {
    return commentsApi.deleteComment(comment)
        .then(() => {
            dispatch(deleteCommentInStore(comment))
        })
        .catch(error => {
            console.log("Error updating comment: " + error);
        });
};
