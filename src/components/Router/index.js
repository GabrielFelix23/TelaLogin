import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from '../Login'
import Cadastrar from '../Cadastrar'
import Error from '../Error'

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/cadastro" component={Cadastrar}/>
                    <Route path="*" component={Error}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router