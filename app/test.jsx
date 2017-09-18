import React from 'react'

export default class Text extends React.Component {

  handleClick () {
    console.log('您点击了按钮')
  }

  render () {
    return (
        <button onClick={this.handleClick}>点击</button>
    )
  }
}