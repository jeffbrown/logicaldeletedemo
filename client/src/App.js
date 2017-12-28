import React from 'react';
import {Grid} from 'react-bootstrap';
import Header from './Header';
import ShowSynths from './ShowSynths';
import ShowDeletedSynths from './ShowDeletedSynths';
import {Col, Row} from 'react-bootstrap';
import {getHash} from 'react-hash-route';
import 'whatwg-fetch';

const componentMap = {
    showSynths: <ShowSynths />,
    showDeletedSynths: <ShowDeletedSynths />
};

const App = () => (
    <Grid>
        <Row>
            <Col mdOffset={1} md={10}>
                <Header />
            </Col>
        </Row>
        <Row>
            <Col mdOffset={1} md={10}>
                <div>
                    {componentMap[getHash() || 'showSynths']}
                </div>
            </Col>
        </Row>
    </Grid>

);

export default App;
