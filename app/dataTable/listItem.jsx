import React from 'react'

export default class ListItem extends React.Component {
  render () {
    return (
        <li><span className="fisrt-span">{this.props.item.name}</span>{this.props.item.price}</li>
    )
  }
}