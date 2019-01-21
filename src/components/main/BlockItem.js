import React from 'react';
import {
    List,
    Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const BlockItem = () => {
    return (
        <List.Item style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            <Image avatar src='/images/avatar/small/christian.jpg' />
            <List.Content>
                <List.Header>Block <Link to="/block/2">2</Link></List.Header>
                <List.Item>Includes 139 Transactions and 0 Uncles</List.Item>
            </List.Content>
        </List.Item>
    )
}

export default BlockItem