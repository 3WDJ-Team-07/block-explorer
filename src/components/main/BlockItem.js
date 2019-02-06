import React from 'react';
import {
    List,
    Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlockItem = ({ block }) => {
    return (
        <List.Item style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            <Image size="mini" avatar src={`/thumb/thumb${Math.trunc(Math.random() * 10 + 1)}.png`} />
            <List.Content>
                <List.Header>Block <Link to={`/block/${block.number}`}>{block.number}</Link></List.Header>
                <List.Item>{block.hash.slice(0, 40)}...</List.Item>
                <List.Item>Includes {block.transactions.length} Transactions and 0 Uncles</List.Item>
                <List.Item>{moment(block.timestamp * 1000).fromNow()}</List.Item>
            </List.Content>
        </List.Item>
    )
}

export default BlockItem