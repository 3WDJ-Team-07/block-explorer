import React, { Component } from 'react';
import {
    Container,
    Input,
    Image,
    Menu,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu fixed='top' color='olive' inverted pointing >
                    <Container>
                        <Menu.Item as='a' href='/' header>
                            <Image alt='logo' size='tiny' src='/asd.png' style={{ marginRight: '1.5em' }} />
                        </Menu.Item>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><Link to='/'>Home</Link></Menu.Item>
                        <Menu.Item name='block' active={activeItem === 'block'} onClick={this.handleItemClick}><Link to='/blocks'>Block</Link></Menu.Item>
                        <Menu.Item name='transaction' active={activeItem === 'transaction'} onClick={this.handleItemClick}><Link to='/transacions'>Transaction</Link></Menu.Item>
                        <Menu.Item position='right'>
                            <Input icon='search' placeholder='Block Number/Tx hash...' />
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}

export default Navbar;