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
import {Button, Row, Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const SynthTable = ({synths, submit, buttonText}) => {

    const renderSynthRow = ({manufacturer, modelName, id}) => {
        return (<tr key={id}>
            <td>
                {manufacturer}
            </td>
            <td>
                {modelName}
            </td>
            <td>
                <Button bsStyle='primary' onClick={(e) => submit(id)}>
                    <FontAwesome name='check' style={{color: 'white'}}/> {buttonText}
                </Button>
            </td>
        </tr>);
    };

    return (
        <Row>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {synths.map(renderSynthRow)}

                </tbody>
            </Table>
        </Row>
    );
};

export default SynthTable;
