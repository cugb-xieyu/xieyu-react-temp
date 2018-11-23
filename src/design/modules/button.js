import './button.less'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

/**
 * 主按钮
 * @class ButtonMain
 * @constructor
 * @param {string} children React child组合
 */
export class ButtonMain extends Component {
  static propTypes = {
    children: PropTypes.string
  }
  render () {
    return <Button type="primary" className="button-main" { ...this.props }>
      { this.props.children }
    </Button>
  }
}

/**
 * 次按钮
 * @class ButtonMinor
 * @constructor
 * @param {string} children React child组合
 */
export class ButtonMinor extends Component {
  static propTypes = {
    children: PropTypes.string
  }
  render () {
    return <Button className="button-minor" { ...this.props }>
      { this.props.children }
    </Button>
  }
}

