import React, { Component } from 'react'
import { Container, Statistic, Icon } from 'semantic-ui-react';

class Status extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center" style={{ marginTop: '9em' }}>
                    <p style={{ fontSize: '3rem' }}><Icon name='chain' />POA Ethereum Blockchain Explorer</p>
                </Container>
                <Container textAlign="center" style={{ marginTop: '2em' }}>
                    <Statistic color='olive'>
                        <Statistic.Value>22123</Statistic.Value>
                        <Statistic.Label>Blocks</Statistic.Label>
                    </Statistic>
                    <Statistic color='olive'>
                        <Statistic.Value>31,200</Statistic.Value>
                        <Statistic.Label>Transactions</Statistic.Label>
                    </Statistic>
                    <Statistic color='olive'>
                        <Statistic.Value>22</Statistic.Value>
                        <Statistic.Label>Members</Statistic.Label>
                    </Statistic>
                </Container>
            </div>
        )
    }
}

export default Status
