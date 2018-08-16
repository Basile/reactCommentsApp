import React from 'react';
import CommentThreadContainer from './container/CommentThread';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <CommentThreadContainer
                    rootComment={{
                        id: 0,
                        parentId: 0,
                        text: ''
                    }}
                    isExpanded={true}
                    forceLoad={true}
                />
            </div>
        );
    }
}

export default App;
