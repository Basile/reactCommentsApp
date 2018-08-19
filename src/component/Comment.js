import React from 'react';

export default class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            error: null
        };
    }

    onChange = (value) => {
        this.setState({commentText: value});
    };

    showError(error) {
        return (
            <div className="comment-error">
                {error.message}
                {error.data &&
                <ul>
                    {Object.entries(error.data).map(e  => (
                        <li key={e[0]}>{e[1]}</li>
                    ))}
                </ul>
                }
            </div>
        )
    }
}
