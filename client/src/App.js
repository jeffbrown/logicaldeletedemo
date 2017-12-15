import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import AppNav from './AppNav';
import ShowSynths from './ShowSynths';
import ShowDeletedSynths from './ShowDeletedSynths';
import {Col, Row} from 'react-bootstrap';
import 'whatwg-fetch';

class App extends Component {

    constructor() {
        super();

        this.state = {
            route: 'showSynths',
            synths: {}
        }
    }

    showSynths = () => this.setState({route: 'showSynths'});

    showDeletedSynths = () => this.setState({route: 'showDeletedSynths'});

    routeContent = () => {
        let content;
        const {route} = this.state;

        switch (route) {
            case 'showSynths':
                content = <ShowSynths />;
                break;
            case 'showDeletedSynths':
                content = <ShowDeletedSynths />;
                break;
            default:
                content = <h1>Error</h1>
        }
        return content;
    };

    render() {
        const {route} = this.state;

        return (
            <Grid>
                <Row>
                    <Col mdOffset={1} md={10}>
                        <AppNav route={route}
                                showSynths={this.showSynths}
                                showDeletedSynths={this.showDeletedSynths}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col mdOffset={1} md={10}>
                        {this.routeContent()}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
