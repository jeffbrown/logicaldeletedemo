import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Header from './Header';
import ShowSynths from './ShowSynths';
import ShowDeletedSynths from './ShowDeletedSynths';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
    <Router>
        <Grid>
            <Row>
                <Col mdOffset={1} md={10}>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col mdOffset={1} md={10}>
                    <div>
                        <Route path='/synths' component={ShowSynths}/>
                        <Route path='/deletedSynths' component={ShowDeletedSynths}/>
                    </div>
                </Col>
            </Row>
        </Grid>
    </Router>
);

export default App;
