import React from 'react'

export default class FormTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {username: '', hobby: '', fruit: ''}

    this.handleChange = this.handleChange.bind(this)
    this.selectChange = this.selectChange.bind(this)
  }

  handleChange (event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name]: value
    })
  }

  selectChange (event) {
    this.setState({
      fruit: event.target.value
    })
  }

  render () {
    const numbers = [1, 2, 3, 4, 5]

    return (
        <div>
          {/*循环渲染*/}
          <ul>
            {
              numbers.map((number) =>
                  <li>{number}</li>
              )
            }
          </ul>

          {/*表单*/}
          {/*单行表单*/}
          <div>
            <label htmlFor="">姓名：</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="请输入您的姓名"/>
            <span>您的姓名：{this.state.username}</span>
          </div>
          <div>
            <label htmlFor="">爱好：</label>
            <input type="text" name="hobby" value={this.state.hobby} onChange={this.handleChange} placeholder="请输入您的爱好"/>
            <span>您的姓名：{this.state.hobby}</span>
          </div>

          {/*下拉列表*/}
          <div>
            <label htmlFor="">水果：</label>
            <select name="" id="" value={this.state.fruit} onChange={this.selectChange}>
              <option value="apple">apple</option>
              <option value="orange">orange</option>
              <option value="paoto">paoto</option>
            </select>
            <span>您爱吃的水果：{this.state.fruit}</span>
          </div>
        </div>
    )
  }
}