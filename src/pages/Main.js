import React from 'react';
import {
    Container,
    Segment,
    Grid,
    Icon,
    Statistic,
    Image,
    List,
    Header,
    Divider,
    Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Status, BlockList } from '../components/main';

const Main = () => {
    return (
        <div className='content-wrapper'>
            <Status />

            <Container style={{ marginTop: '1em' }}>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        <BlockList />
                        <Grid.Column>
                            <Segment style={{ height: "600px", overflow: 'scroll' }}>
                                <Header as='h2' floated='left'>
                                    <Icon name='credit card' />
                                    <Header.Content>최근 거래 내역</Header.Content>
                                </Header>
                                <Header as='h2' floated='right'>
                                    <Header.Content><Link to='/blocks' style={{ fontSize: '1.25rem' }}>더보기</Link></Header.Content>
                                </Header>
                                <List animated celled verticalAlign='middle' size="big" style={{ marginTop: '3.5rem' }}>
                                    <List.Item style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                                        <Image avatar src='/images/avatar/small/christian.jpg' />
                                        <List.Content>
                                            <List.Header>Block <Link to="/block/2">2</Link></List.Header>
                                            <List.Item>Includes 139 Transactions and 0 Uncles</List.Item>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            <Segment inverted vertical style={{ margin: '6em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                </Container>
            </Segment>
        </div >
    );
}

export default Main
