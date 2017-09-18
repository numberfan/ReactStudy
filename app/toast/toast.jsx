import React from 'react'
import './toast.less'

export default class Toast extends React.Component {

  constructor () {
    super()

    this.state = {
      show: true,
      display: 'block'
    }

    this.closeBox = this.closeBox.bind(this)
  }

  closeBox (e) {
    console.log(e)
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render () {
    let style = {
      display: this.state.show ? 'block' : 'none'
    }
    return (
        <div className="toast-box" style={style}>
          <div className="toast-con">
            <div className="hd">
              <button className="close" onClick={this.closeBox}>+</button>
            </div>
            <h3 className="bd">您确定要删除吗？</h3>
            <div className="ft">
              <button className="btn cancel" onClick={this.closeBox}>取消</button>
              <button className="btn sure" onClick={this.closeBox}>确定</button>
            </div>
          </div>
        </div>
    )
  }
}