import React from 'react';
import {Alert, Label, Row} from 'react-bootstrap';
import {SERVER_URL} from './config';
import SynthTable from './SynthTable';

class ShowSynths extends React.Component {

    state = {synths: []};

    componentDidMount() {
        this.updateSynthList();
    }

    updateSynthList = async () => {
        try {
            const res = await fetch(`${SERVER_URL}/synths/`);
            const synths = await res.json();
            this.setState({synths});
        } catch (e) {
            console.error('parsing failed', e);
        }
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
