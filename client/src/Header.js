import {route} from 'react-hash-route';

import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {func, string} from 'prop-types';

class Header extends React.Component {

    showSynths = () => route('showSynths');
    showDeletedSynths = () => route('showDeletedSynths');

    render() {
        return (
            <Nav bsStyle="tabs">
                <NavItem onClick={this.showSynths}>List Synths</NavItem>
                <NavItem onClick={this.showDeletedSynths}>List Deleted Synths</NavItem>
            </Nav>);
    }
}

export default Header;
