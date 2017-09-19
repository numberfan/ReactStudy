import React from 'react'

function UserInfo(props) {
  return (
      <div>
        {props.children}
      </div>
  )
}

export default class Text extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
        <UserInfo>
          <h1>{this.props.name}</h1>
        </UserInfo>
    )
  }
}