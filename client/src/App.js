import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Header from './Header';
import ShowSynths from './ShowSynths';
import ShowDeletedSynths from './ShowDeletedSynths';
import {getHash} from 'react-hash-route';
import 'whatwg-fetch';

const componentMap = {
    showSynths: <ShowSynths/>,
    showDeletedSynths: <ShowDeletedSynths/>
};

const App = () => (
    <Grid>
        <Row>
            <Col mdOffset={1} md={10}>
                <Header/>
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
