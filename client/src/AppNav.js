/*
 * Copyright 2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {string, func} from 'prop-types';

import 'whatwg-fetch';

function AppNav({route, showSynths, showDeletedSynths}) {

    const tabKey = () => {
        let key = 0;
        switch (route) {
            case 'showSynths':
                key = 1;
                break;
            case 'showDeletedSynths':
                key = 2;
                break;
            default:
                key = 0;
        }
        return key;
    };


    return (
        <Nav bsStyle="tabs" activeKey={tabKey()}>
          <NavItem eventKey={1} onClick={showSynths}>List Synths</NavItem>
          <NavItem eventKey={2} onClick={showDeletedSynths}>List Deleted Synths</NavItem>
        </Nav>);

}

AppNav.propTypes = {
    route: string.isRequired,
    showSynths: func,
    showDeletedSynths: func
};

export default AppNav;
