import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import OrderList from '@/views/orderlist/OrderList'

class MainView extends React.Component {

  render () {
    return (
      <div>
        <div>Header</div>
        <div>Menu</div>
        <div>
          <Switch>
            <Redirect exact from="/" to="/order-list"></Redirect>
            <Route path="/order-list" component={ OrderList }></Route>
          </Switch>
        </div>
      </div>
    )
  }

}

export default MainView