/**
 * Created by chenfan on 2017/9/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './clock/clock'
import Toggle from './toggle/toggle'

let box = document.querySelector('#app')
ReactDOM.render(
    <Clock username="shirychen"/>,
    box
)

ReactDOM.render(
    <Toggle/>,
    box
)