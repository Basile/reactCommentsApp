import PropTypes from 'prop-types';

export const commentPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    parentId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
});
