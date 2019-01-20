import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main, Block, Transaction } from './pages';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/block/:address' component={Block} />
                    <Route path='/transaction/:address' component={Transaction} />
                    <Route path='/' component={Main} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
