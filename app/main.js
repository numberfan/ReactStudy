/**
 * Created by chenfan on 2017/9/18.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './clock/clock'
import Toggle from './toggle/toggle'
import FormTest from './form/formTest'
import DataTable from './dataTable/dataTable'

let box = document.querySelector('#app')

ReactDOM.render(
    <div>
      <Clock username="shirychen"/> {/*clock*/}
      <Toggle/> {/*toggle*/}
      <FormTest/> {/*form*/}
      <DataTable/> {/*dataTable*/}
    </div>,
    box
)
