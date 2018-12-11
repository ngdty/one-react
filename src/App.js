import React, { Component } from 'react'

import { Home } from './pages/home'
import {Article} from './pages/article'
import {Music} from './pages/music'
import {Movie} from './pages/movie'
import { Route, Switch, Redirect } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path='/home' component={Home}/>
        <Route path="/article" component={Article} />
        <Route path="/music" component={Music} />
        <Route path="/movie" component={Movie} /> 
      </Switch>
    )
  }
}

export default App;
