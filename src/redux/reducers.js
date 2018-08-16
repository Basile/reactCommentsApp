import * as actionTypes from './actionTypes';

const initialState = {
    comments: {}
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_THREAD_COMMENTS:
            return Object.assign({}, state, {
                comments: Object.assign(state.comments, {[action.parentId]: action.comments})
            });
        case actionTypes.ADD_COMMENT:
            if (state.comments[action.comment.parentId] !== undefined) {
                let newComments = state.comments[action.comment.parentId].slice();
                newComments.push(action.comment);
                return Object.assign({}, state, {
                    comments: Object.assign(state.comments, {[action.comment.parentId]: newComments})
                });
            }
            return state;
        case actionTypes.UPDATE_COMMENT:
            if (state.comments[action.comment.parentId] !== undefined) {
                let newComments = state.comments[action.comment.parentId].map((comment) => (
                    comment.id === action.comment.id ? action.comment : comment
                ));
                return Object.assign({}, state, {
                    comments: Object.assign(state.comments, {[action.comment.parentId]: newComments})
                });
            }
            return state;
        case actionTypes.DELETE_COMMENT:
            if (state.comments[action.comment.parentId] !== undefined) {
                let newComments = state.comments[action.comment.parentId].filter((comment) => (
                    comment.id !== action.comment.id
                ));
                return Object.assign({}, state, {
                    comments: Object.assign(state.comments, {[action.comment.parentId]: newComments})
                });
            }
            return state;
        default:
            return state;
    }
};
