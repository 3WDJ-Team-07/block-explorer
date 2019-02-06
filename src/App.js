import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main, Blocks, BlockDetail, Transactions, TransactionDetail } from './pages'
import { Navbar } from './components/common';
import Web3 from 'web3';
import './App.css'


class App extends Component {
    componentDidMount() {
        window.web3 = new Web3(new Web3.providers.HttpProvider(
            "http://eth3noj46-dns-reg1.koreacentral.cloudapp.azure.com:8540"));
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Route path='/' component={Navbar} />
                    <Switch>
                        <Route path='/blocks' component={Blocks} />
                        <Route path='/block/:address' component={BlockDetail} />
                        <Route path='/transactions' component={Transactions} />
                        <Route path='/transaction/:address' component={TransactionDetail} />
                        <Route path='/' component={Main} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App
