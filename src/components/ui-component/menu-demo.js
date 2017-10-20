import React, {Component} from 'react'
import { Menu, Icon } from 'antd'
import DemoShower from '../demo-shower'

const SubMenu = Menu.SubMenu

const MenuDemoOne = () => {
  return (
    <div>
      <DemoShower title='一层导航菜单' desc='App功能比较少时选择,若有图标,放在文字右侧'>
        <Menu
          style={{ width: 240 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
        >

          <Menu.Item key='1'>Option 1<Icon className='margin-l-1' type='setting' /></Menu.Item>
          <Menu.Item key='2'>Option 2</Menu.Item>

          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
        </Menu>
      </DemoShower>
    </div>
  )
}

const MenuDemoTwo = () => {
  return (
    <div>
      <DemoShower title='二层导航菜单' desc='App功能较多,有层次时选择,若有图标,放在文字右侧'>
        <Menu
          style={{ width: 240 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
        >
          <SubMenu key='sub1' title={<span><span>Navigation One</span><Icon className='margin-l-1' type='mail' /></span>}>
            <Menu.Item key='1'>Option 1</Menu.Item>
            <Menu.Item key='2'>Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title={<span><span>Navigation Two</span><Icon className='margin-l-1' type='appstore' /></span>}>
            <Menu.Item key='5'>Option 5</Menu.Item>
            <Menu.Item key='6'>Option 6</Menu.Item>
            <SubMenu key='sub3' title='Submenu'>
              <Menu.Item key='7'>Option 7</Menu.Item>
              <Menu.Item key='8'>Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='sub4' title={<span><span>Navigation Three</span><Icon className='margin-l-1' type='setting' /></span>}>
            <Menu.Item key='9'>Option 9</Menu.Item>
            <Menu.Item key='10'>Option 10</Menu.Item>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </DemoShower>
    </div>

  )
}

class MenuDemo extends Component {
  render () {
    return (
      <div>
        <h1>导航菜单</h1>
        <hr />

        <h4 className='margin-t-2'>说明:</h4>
        <p>
          用于页面导航,放置于页面左侧,可以是一层菜单或者两层菜单
        </p>

        <MenuDemoOne />
        <MenuDemoTwo />
      </div>
    )
  }
}

export default MenuDemo
