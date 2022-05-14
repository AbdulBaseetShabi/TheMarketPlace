import React from 'react';
import '../seller.css';

class Books extends React.Component {
    render() {
        return (
            <div>Books: {this.props.filter}</div>
        );
    }
}

export default Books;