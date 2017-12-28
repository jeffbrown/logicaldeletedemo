import React, {Component} from 'react';
import {route} from 'react-hash-route';

class Header extends Component {

    showSynths = () => route('showSynths');
    showDeletedSynths = () => route('showDeletedSynths');

    render() {
        return (
            <div>
                <a key="showSynths" onClick={this.showSynths}>Show Synths</a>
                <a key="showDeletedSynths" onClick={this.showSynths}>Show Deleted Synths</a>
            </div>
        );
    }
}

export default Header;
