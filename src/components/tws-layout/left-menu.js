import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom'

const {SubMenu} = Menu;

class LeftMenu extends Component {
  render() {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%'}}
        >
          <SubMenu key="sub1" title={<span>基础</span>}>
            <Menu.Item key="1"><Link to="/colors">颜色</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/score-sheet">成绩表</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>组件</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span>布局</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
    )
  }
}

export default LeftMenu;
