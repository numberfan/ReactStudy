import React from 'react'
import './toggle.less'
import Toast from '../toast/toast'

export default class Toggle extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      text: '显示框',
      showToast: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
          showToast: !prevState.showToast,
          text: this.state.show ? '显示框' : '隐藏框'
        })
    )
  }

  render () {
    return (
        <div className="box">
          <button onClick={this.handleClick}>{this.state.text}</button>
          <Toast show={this.state.showToast} onChangeShow={this.handleClick}/>
        </div>
    )
  }
}