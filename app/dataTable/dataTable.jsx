import React from 'react'
import SearchInput from './searchInput'
import ProductTable from './productTable'

export default class DataTable extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      keyword: '',
      checked: false
    }

    this.search = this.search.bind(this)
    this.check = this.check.bind(this)
  }

  search (val) {
    this.setState({
      keyword: val
    })
  }

  check (val) {
    this.setState({
      checked: val
    })
  }

  render () {
    return (
        <div className="wrap">
          <SearchInput search={this.search} check={this.check}/>
          <ProductTable keyword={this.state.keyword} checked={this.state.checked}/>
        </div>
    )
  }
}