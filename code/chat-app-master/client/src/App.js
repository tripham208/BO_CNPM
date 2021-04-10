import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Join, Chat} from './components'
import {Register} from './components/Register/Register'
import {Edit} from './components/Edit/Edit'
import {CreateGr} from './components/CreateGr/CreateGr'
const App = () => (
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
        <Route path='/register' component={Register} />
        <Route path='/edit' component={Edit} />
        <Route path='/creategr' component={CreateGr} />
    </Router>
)

export default App