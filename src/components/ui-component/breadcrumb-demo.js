import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { DemoShower } from '../tws-component'

class BreadcrumbDemo extends Component {
  render () {
    return (
      <div>
        <h1>面包屑</h1>
        <hr />
        <DemoShower title='面包屑实例' desc='面包屑以斜杠"/"分隔,最后一个为加粗,一般在页面上部'>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href=''>Application Center</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href=''>Application List</a></Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </DemoShower>
      </div>
    )
  }
}

export default BreadcrumbDemo
