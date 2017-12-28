import React from 'react';
import {Alert, Label, Row} from 'react-bootstrap';
import {SERVER_URL} from './config';
import SynthTable from './SynthTable';

class ShowDeletedSynths extends React.Component {

    state = {synths: []};

    updateSynthList = async () => {
        try {
            const res = await fetch(`${SERVER_URL}/deletedSynths/`);
            const synths = await res.json();
            this.setState({synths});
        } catch (e) {
            console.error('parsing failed', e);
        }
    };

    componentDidMount() {
        this.updateSynthList();
    }

    unDeleteSynth = (id) => {
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

    render() {
        const {synths} = this.state;

        return (
            <Row>
                <h2>Deleted Synthesizer List</h2>
                <Alert bsStyle="info">
                    Below is a list of all of the synthesizers which <b>have</b> been deleted.
                </Alert>

                <h2><Label>Deleted Synthesizers</Label></h2>
                <SynthTable synths={synths} buttonText="Recover" submit={this.unDeleteSynth}/>
            </Row>
        );
    }
}

export default ShowDeletedSynths;
