import './OrderList.less'

import React from 'react'
import PropTypes from 'prop-types'

import { ButtonMain, ButtonMinor } from '@/design'

class OrderList extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string
    })
  }
  constructor() {
    super()
  }

  hello = () => {
    console.log('hello')
  }

  render() {
    return (
      <div>
        <div className="group">
          <ButtonMain onClick={ this.hello }>主按钮</ButtonMain>
            &emsp;
          <ButtonMain onClick={ this.hello } active="active">主按钮</ButtonMain>
            &emsp;
          <ButtonMain onClick={ this.hello } disabled>主按钮</ButtonMain>
        </div>
        <div className="group">
          <ButtonMinor>次按钮</ButtonMinor>
            &emsp;
          <ButtonMinor active="active">次按钮</ButtonMinor>
            &emsp;
          <ButtonMinor disabled>次按钮</ButtonMinor>
        </div>
        <div className="group">
          <ButtonMinor icon="plus">新建订单</ButtonMinor>
            &emsp;
          <ButtonMinor icon="plus" active="active">新建订单</ButtonMinor>
            &emsp;
          <ButtonMinor icon="plus" disabled>新建订单</ButtonMinor>
        </div>
      </div>
    )
  }
}

export default OrderList