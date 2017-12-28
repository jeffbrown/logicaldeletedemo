import React from 'react';
import {Alert, Label, Row} from 'react-bootstrap';
import {SERVER_URL} from './config';
import SynthTable from './SynthTable';

class ShowSynths extends React.Component {

    constructor() {
        super();
        this.state = {
            synths: []
        }
    }

    componentDidMount() {
        this.updateSynthList();
    }

    updateSynthList = () => {
        fetch(`${SERVER_URL}/synths/`)
            .then(r => r.json())
            .then(json => {
                this.setState({synths: json})
            })
            .catch(ex => console.error('parsing failed', ex))
    };

    deleteSynth = (id) => {
        console.log(`Deleting ${id}`);
        fetch(`${SERVER_URL}/synthesizer/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
            .then(r => {
                console.log(`Status was ${r.status}`);
                this.updateSynthList();
            })
            .catch(() => this.setState({error: "Unable to access server!"}));
    };

    render() {
        const {synths} = this.state;

        return (
            <Row>
                <h2>Synthesizer List</h2>
                <Alert bsStyle="info">
                    Below is a list of all of the synthesizers which have <b>not</b> been deleted.
                </Alert>

                <h2><Label>Synthesizers</Label></h2>
                <SynthTable synths={synths} buttonText="Delete" submit={this.deleteSynth}/>
            </Row>
        );
    }
}

export default ShowSynths;
