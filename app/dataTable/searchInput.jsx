import React from 'react'

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props)

    this.search = this.search.bind(this)
    this.check = this.check.bind(this)
  }

  search (e) {
    this.props.search(e.target.value)
  }

  check (e) {
    this.props.check(e.target.checked)
  }

  render () {
    return (
        <div className="search-box">
          <p><input type="text" placeholder="search...." onChange={this.search}/></p>
          <p><input type="checkbox" onChange={this.check}/>Only show products in stock</p>
        </div>
    )
  }
}