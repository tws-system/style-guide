import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import queryString from 'query-string'

const {SubMenu} = Menu

const submenus = [{
  name: 'rules',
  items: ['cssRule']
}, {
  name: 'basic',
  items: ['colors', 'gaps']
}, {
  name: 'components',
  items: ['buttons', 'popConfirm', 'pagination', 'breadcrumb', 'menu', 'card', 'tabs', 'markdownEditor', 'form']
}, {
  name: 'businessComponent',
  items: ['scoreSheet', 'header']
}, {
  name: 'layout',
  items: ['defaultLayout']
}]

class LeftMenu extends Component {
  render () {
    const {lang} = queryString.parse(this.props.location.search)
    const search = queryString.stringify({lang})
    const selectedKey = this.props.location.pathname.slice(1) || 'cssRule'
    const currentMenuItem = submenus.find((submenu) => {
      return submenu.items.indexOf(selectedKey) > -1
    })

    const openKey = currentMenuItem ? currentMenuItem.name : 'rules'

    return (
      <Menu
        mode='inline'
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={[openKey]}
        style={{height: '100%'}}
      >
        {
          submenus.map((subMenu) => {
            return (
              <SubMenu key={subMenu.name} title={<span><FormattedMessage id={subMenu.name} /></span>}>
                {
                  subMenu.items.map((name, idx) => {
                    let pathname = '/' + name
                    return (
                      <Menu.Item key={name}><Link to={{pathname, search}}><FormattedMessage id={name} /></Link></Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    )
  }
}

export default withRouter(LeftMenu)
