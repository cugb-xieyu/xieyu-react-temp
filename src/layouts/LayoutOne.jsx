import './layoutone.less'

import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'
import { Menu, Icon } from 'antd'
//import { Spin } from 'antd'

//import OrderList from '@/containers/OrderList'

function Loading({ error }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return <h3>Loading...</h3>;
  }
}
export default class LayoutOne extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string
    })
  }
  render() {
    const LoadableOrderList = Loadable({
      loader: () => import('@/containers/OrderList'),
      loading: Loading
    });
    return (
      <article className="layout-wrap">
        <section className="layout-master">
          <div className="layout-cent">
            <div className="layout-top"></div>
            <div className="layout-main">
              <Menu theme="light" defaultSelectedKeys={[this.props.match.url]} mode="inline">
                <Menu.Item key="/project-list">
                  <Icon type="pie-chart" />
                  <span>ProjectList</span>
                  <Link to="/project-list"></Link >
                </Menu.Item>
                <Menu.Item key="/order-list">
                  <Icon type="desktop" />
                  <span>OrderList</span>
                  <Link to="/order-list"></Link >
                </Menu.Item>
              </Menu>
              <Switch>
                <Route path={`/project-list/`} render={() => <div>{this.props.match.url}</div>}></Route>
                <Route path={`/order-list/`} component={LoadableOrderList}></Route>
              </Switch>
            </div>
          </div>
        </section>
        <section className="layout-bot"></section>
      </article>
    )
  }
}


// export default class LayoutOne extends React.Component {
//   static propTypes = {
//     match: PropTypes.shape({
//       url: PropTypes.string
//     })
//   }

//   render() {
//     return (
//       <article className="layout-wrap">
//         <section className="layout-master">
//           <div className="layout-cent">
//             <div className="layout-top"></div>
//             <div className="layout-main">
//               <Switch>
//                 <Route path={`${this.props.match.url}/`} component={ OrderList }></Route>
//                 <Route path={`${this.props.match.url}/`} render={() => <div>{this.props.match.url}</div>}></Route>
//               </Switch>
//             </div>
//           </div>
//         </section>
//         <section className="layout-bot"></section>
//       </article>
//     )
//   }
// }