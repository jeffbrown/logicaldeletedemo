import React from 'react';
import {Alert, Button, Label, Row, Table} from 'react-bootstrap';
import 'whatwg-fetch';
import {SERVER_URL} from './config';
import FontAwesome from 'react-fontawesome';

class ShowDeletedSynths extends React.Component {

    constructor() {
        super();
        this.state = {
            synths: []
        }
    }
    updateSynthList = () => {
        fetch(`${SERVER_URL}/deletedSynths/`)
            .then(r => r.json())
            .then(json => {
                this.setState({synths: json})
            })
            .catch(ex => console.error('parsing failed', ex))
    };

    componentDidMount() {
        this.updateSynthList();
    }

    unDeleteSynth = (e, id) => {
        console.log(`Undeleting ${id}`);
        fetch(`${SERVER_URL}/undeleteSynth/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
            .then(r => {
                console.log(`Status was ${r.status}`);
                this.updateSynthList();
            })
            .catch(() => this.setState({error: "Unable to access server!"}));
    };

    renderSynthRow = ({manufacturer, modelName, deleted, id}) => {
        return (<tr key={id}>
            <td>
                {manufacturer}
            </td>
            <td>
                {modelName}
            </td>
            <td>
                <Button bsStyle='primary' onClick={(e) => this.unDeleteSynth(e, id)}>
                    <FontAwesome name='check' style={{color: 'white'}}/> Undelete
                </Button>
            </td>
        </tr>);
    };

    render() {
        const {synths} = this.state;

        return (
            <Row>
                <h2>Deleted Synthesizer List</h2>
                <Alert bsStyle="info">
                    Below is a list of all of the synthesizers which have been deleted.
                </Alert>

                <h2><Label>Deleted Synthesizers</Label></h2>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Deleted</th>
                    </tr>
                    </thead>
                    <tbody>

                    {synths.map(this.renderSynthRow)}

                    </tbody>
                </Table>
            </Row>
        );
    }
}

export default ShowDeletedSynths;
