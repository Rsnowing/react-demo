import React from 'react'
import { Switch, Route } from 'react-router-dom'
import router from './router'

export default function IndexRoute() {
  return (
    <Switch>
      {
        router.map((item, index) => {
          return (
            <Route 
              path={item.path} 
              exact={item.exact} 
              render={item.render}
              key={index}
            >
            </Route>
          )
        })
      }
    </Switch>
  )
}