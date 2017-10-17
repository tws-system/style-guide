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
          <Menu.Item key='5'><FormattedMessage id='general' /></Menu.Item>
          <Menu.Item key='6'><FormattedMessage id='layout' /></Menu.Item>
          <Menu.Item key='7'><FormattedMessage id='navigation' /></Menu.Item>
          <Menu.Item key='8'><FormattedMessage id='dataDisplay' /></Menu.Item>
          <Menu.Item key='9'><FormattedMessage id='feedback' /></Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' title={<span><FormattedMessage id='layout' /></span>}>
          <Menu.Item key='10'><Link to='/dp'><FormattedMessage id='pagination' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' title={<span><FormattedMessage id='example' /></span>}>
          <Menu.Item key='11'><Link to='/score-sheet'><FormattedMessage id='scoreSheet' /></Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default LeftMenu
