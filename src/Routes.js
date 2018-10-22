import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import NCR from './pages/NCR'
import COFC from './pages/COFC'
import CMTR from './pages/CMTR'
import Error404 from './pages/Error404'

export const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/ncr' component={NCR} />
        <Route path='/cofc' component={COFC} />
        <Route path='/CMTR' component={CMTR} />
        <Route component={Error404} />
    </Switch>
)