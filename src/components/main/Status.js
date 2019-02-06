import React, { Component } from 'react'
import { Container, Statistic, Icon } from 'semantic-ui-react';

class Status extends Component {
    render() {
        const { blockCount, txCount } = this.props;
        return (
            <div>
                <Container textAlign="center" style={{ marginTop: '9em' }}>
                    <p style={{ fontSize: '3rem' }}><Icon name='chain' />POA Ethereum Blockchain Explorer</p>
                </Container>
                <Container textAlign="center" style={{ marginTop: '2em' }}>
                    <Statistic color='olive'>
                        <Statistic.Value>{blockCount}</Statistic.Value>
                        <Statistic.Label>블록</Statistic.Label>
                    </Statistic>
                    <Statistic color='olive'>
                        <Statistic.Value>{txCount}</Statistic.Value>
                        <Statistic.Label>거래</Statistic.Label>
                    </Statistic>
                    <Statistic color='olive'>
                        <Statistic.Value>6</Statistic.Value>
                        <Statistic.Label>맴버</Statistic.Label>
                    </Statistic>
                </Container>
            </div>
        )
    }
}

export default Status
