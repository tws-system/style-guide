import React, {Component} from 'react'
import {Menu} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import queryString from 'query-string'

const {SubMenu} = Menu

class LeftMenu extends Component {
  render () {
    const {lang} = queryString.parse(this.props.location.search)
    const search = queryString.stringify({
      lang
    })
    return (
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{height: '100%'}}
        >
        <SubMenu key='sub1' title={<span><FormattedMessage id='basic' /></span>}>
          <Menu.Item key='1'><Link to={{pathname: '/colors', search}}><FormattedMessage id='colors' /></Link></Menu.Item>
          <Menu.Item key='2'><Link to={{pathname: '/gaps', search}}><FormattedMessage id='gaps' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title={<span><FormattedMessage id='components' /></span>}>
          <Menu.Item key='5'><Link to={{pathname: '/buttons', search}}><FormattedMessage id='buttons' /></Link></Menu.Item>
          <Menu.Item key='6'><Link to={{pathname: '/popconfirm', search}}><FormattedMessage id='popconfirm' /></Link></Menu.Item>
          <Menu.Item key='7'><Link to={{pathname: '/pagination', search}}><FormattedMessage id='pagination' /></Link></Menu.Item>
          <Menu.Item key='8'><Link to={{pathname: '/breadcrumb', search}}><FormattedMessage id='breadcrumb' /></Link></Menu.Item>
          <Menu.Item key='9'><Link to={{pathname: '/menu', search}}><FormattedMessage id='menu' /></Link></Menu.Item>
          <Menu.Item key='10'><Link to={{pathname: '/card', search}}><FormattedMessage id='card' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' title={<span><FormattedMessage id='dataEntry' /></span>}>
          <Menu.Item key='21'><Link to={{pathname: '/form', search}}><FormattedMessage id='form' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' title={<span><FormattedMessage id='layout' /></span>}>
          <Menu.Item key='21'><Link to={{pathname: '/dp', search}}><FormattedMessage id='header' /></Link></Menu.Item>
        </SubMenu>
        <SubMenu key='sub5' title={<span><FormattedMessage id='example' /></span>}>
          <Menu.Item key='22'><Link to={{pathname: '/score-sheet', search}}><FormattedMessage id='scoreSheet' /></Link></Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default withRouter(LeftMenu)
