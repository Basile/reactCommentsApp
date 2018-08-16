import * as actionTypes from './actionTypes';

export const setThreadComments = (parentId, comments) => ({
    type: actionTypes.SET_THREAD_COMMENTS,
    parentId,
    comments
});

export const addComment = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    comment
});

export const updateComment = (comment) => ({
    type: actionTypes.UPDATE_COMMENT,
    comment
});

export const deleteComment = (comment) => ({
    type: actionTypes.DELETE_COMMENT,
    comment
});
