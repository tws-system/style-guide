import React, {Component} from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const {SubMenu} = Menu

class LeftMenu extends Component {
  render () {
    return (
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{height: '100%'}}
        >
        <SubMenu key='sub1' title={<span><FormattedMessage id='basic' /></span>}>
          <Menu.Item key='1'><Link to='/colors'><FormattedMessage id='colors' /></Link></Menu.Item>
          <Menu.Item key='2'><Link to='/gaps'><FormattedMessage id='gaps' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title={<span><FormattedMessage id='components' /></span>}>
          <Menu.Item key='5'><Link to='/buttons'><FormattedMessage id='buttons' /></Link></Menu.Item>
          <Menu.Item key='6'><Link to='/popconfirm'><FormattedMessage id='popconfirm' /></Link></Menu.Item>
          <Menu.Item key='7'><Link to='/pagination'><FormattedMessage id='pagination' /></Link></Menu.Item>
          <Menu.Item key='8'><Link to='/breadcrumb'><FormattedMessage id='breadcrumb' /></Link></Menu.Item>
          <Menu.Item key='9'><Link to='/menu'><FormattedMessage id='menu' /></Link></Menu.Item>

        </SubMenu>
        <SubMenu key='sub3' title={<span><FormattedMessage id='layout' /></span>}>
          <Menu.Item key='21'><Link to='/dp'><FormattedMessage id='header' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' title={<span><FormattedMessage id='example' /></span>}>
          <Menu.Item key='22'><Link to='/score-sheet'><FormattedMessage id='scoreSheet' /></Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default LeftMenu
