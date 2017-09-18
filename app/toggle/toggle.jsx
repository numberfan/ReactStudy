import React from 'react'
import './toggle.less'

export default class Text extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      text: '显示框',
      show: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
          show: !prevState.show,
          text: this.state.show ? '显示框' : '隐藏框'
        })
    )
  }

  render () {
    let boxStyle = {
      display: this.state.show ? 'block' : 'none'
    }
    return (
        <div className="box">
          <button onClick={this.handleClick}>{this.state.text}</button>
          <div className="toggle-panel" style={boxStyle}></div>
        </div>
    )
  }
}