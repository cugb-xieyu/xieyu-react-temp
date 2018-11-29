import './OrderList.less'

import React from 'react'
import PropTypes from 'prop-types'

class OrderList extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string
    })
  }
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        OrderList
      </div>
    )
  }
}

export default OrderList