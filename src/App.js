import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main, Blocks, BlockDetail, Transactions, TransactionDetail } from './pages'
import { Navbar } from './components/common';
import './App.css'


class App extends Component {
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
