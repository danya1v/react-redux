import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import { Route, Switch } from "react-router-dom"

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getMenuItems()
    .then (menu => console.log(menu))
    .catch(error => {console.log('Error!!!!!')})
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                
                <Route path='/' component={MainPage}/>
                <Route path='/' component={CartPage}/>
                <Route  exact component={MainPage}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);
