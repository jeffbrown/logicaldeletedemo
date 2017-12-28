import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <Nav bsStyle="tabs">
                <NavItem><Link to={'/synths'}>List Synths</Link></NavItem>
                <NavItem><Link to={'/deletedSynths'}>List Deleted Synths</Link></NavItem>
            </Nav>);
    }
}

export default Header;
