import React from 'react'
import './base.less'
import ListItem from './listItem'

const dataArr = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default class ProductTable extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let listArr = []; // dom arr
    let nowCategory = null// now category value
    let _renderVal = dataArr
    let keyword = this.props.keyword
    let checked = this.props.checked

    _renderVal.map((number) => {
      if ((number.name.indexOf(keyword) < 0) && (number.price.indexOf(keyword) < 0) || (checked && !number.stocked)) {
        return
      }

      // 设置标题
      if (number.category !== nowCategory) {
        listArr.push(<li className="text-align font-weight">{number.category}</li>)
      }

      listArr.push(<ListItem item={number}/>)
      nowCategory = number.category
    })

    return (
        <div className="product-box">
          <ul>
            <li className="font-weight"><span className="fisrt-span">Name</span>Price</li>
            {listArr}
          </ul>
        </div>
    )
  }
}