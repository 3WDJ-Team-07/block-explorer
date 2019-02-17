import React, { Component } from 'react';
import {
    Container,
    Segment,
    Grid,
    Icon,
    Image,
    List,
    Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Status, BlockList } from '../components/main';
import { EthInterface } from '../lib';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        recent_blocks: [],
        curr_block_no: 0,
    }
    componentWillMount = () => {
        // this._getCurtentBlockNumber().then(curr_num => {
        //     this.setState({
        //         curr_block_no: curr_num
        //     })
        // });
        // this._getRecentBlockList().then(list => {
        //     this.setState({
        //         recent_blocks: list
        //     })
        // });
        let a = new EthInterface;
        console.log(a.test());
        
    }
    // _getCurtentBlockNumber = async () => {
    //     let curr_num = await web3.eth.getBlockNumber();
    //     return curr_num;
    // }

    // _getBlock = (number) => {
    //     return web3.eth.getBlock(number);
    // }

    // _getRecentBlockList = async () => {
    //     let recent_blocks = [];
    //     let curr_block_no = await this._getCurtentBlockNumber();
    //     const max_blocks = 10;
    //     for (let i = 0; i < max_blocks; i++) {
    //         recent_blocks.push(await this._getBlock(curr_block_no - i));
    //     }
    //     return recent_blocks;
    // }

    render() {
        const { recent_blocks, curr_block_no } = this.state;

        return (
            <div className='content-wrapper'>
                <Status
                    blockCount={curr_block_no}
                    txCount={12}
                />

                <Container style={{ marginTop: '1em' }}>
                    <Grid columns={2} divided>
                        <Grid.Row stretched>
                            <BlockList
                                blocks={recent_blocks}
                            />

                            <Grid.Column>
                                <Segment style={{ height: "600px", overflow: 'scroll' }}>
                                    <Header as='h2' floated='left'>
                                        <Icon name='credit card' />
                                        <Header.Content>최근 거래내역</Header.Content>
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
}

export default Main
