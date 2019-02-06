import React, { Component } from 'react'
import { Container, Segment, Icon, Label, Pagination, Table } from 'semantic-ui-react'
class Blocks extends Component {
    state = {
        activePage: 1,
    }
    handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

    render() {
        const { activePage } = this.state;
        return (
            <Container style={{ marginTop: '9em' }}>
                <Segment textAlign="center">
                    <p style={{ fontSize: '3rem' }}><Icon name='cubes' />Browse all Ethereum Blocks</p>

                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2}>블록번호</Table.HeaderCell>
                                <Table.HeaderCell width={3}>생성시간</Table.HeaderCell>
                                <Table.HeaderCell>블록 해시</Table.HeaderCell>
                                <Table.HeaderCell width={2}>포함된 거래</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Pagination
                        activePage={activePage}
                        onPageChange={this.handlePaginationChange}
                        totalPages={20}
                    />
                </Segment>
            </Container>
        )
    };
}

export default Blocks
