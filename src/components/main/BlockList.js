import React, { Component } from 'react'
import {
    Grid,
    Header,
    Icon,
    List,
    Image,
    Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import BlockItem from './BlockItem';

class BlockList extends Component {
    render() {
        return (
            <Grid.Column>
                <Segment style={{ height: "600px", overflow: 'scroll' }}>
                    <Header as='h2' floated='left'>
                        <Icon name='cubes' />
                        <Header.Content>최근 생성 블록</Header.Content>
                    </Header>
                    <Header as='h2' floated='right'>
                        <Header.Content><Link to='/blocks' style={{ fontSize: '1.25rem' }}>더보기</Link></Header.Content>
                    </Header>
                    <List animated celled verticalAlign='middle' size="big" style={{ marginTop: '3.5rem' }}>
                        <BlockItem />
                    </List>
                </Segment>
            </Grid.Column>
        )
    }
}

export default BlockList
