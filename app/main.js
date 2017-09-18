/**
 * Created by chenfan on 2017/9/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './clock/clock'
import Toggle from './toggle/toggle'
import Toast from './toast/toast'

let box = document.querySelector('#app')

// clock
ReactDOM.render(
    <Clock username="shirychen"/>,
    box
)

// toggle
ReactDOM.render(
    <Toggle/>,
    box
)

// toast
ReactDOM.render(
    <Toast/>,
    box
)