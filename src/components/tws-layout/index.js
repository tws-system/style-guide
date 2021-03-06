import React, {Component} from 'react'
import {Layout, Breadcrumb, Row, Col} from 'antd'
import LeftMenu from './left-menu'
import logo from '../../images/tws-logo.png'
import '../../less/index.less'
import LanguageButtons from './language-buttons'
import { FormattedMessage } from 'react-intl'
const { Header, Content, Footer, Sider } = Layout

class TwsLayout extends Component {
  render () {
    return (
      <Layout>
        <Header className='App-header' style={{lineHeight: '36px'}}>
          <Row>
            <Col span={6}>
              <img src={logo} className='App-logo' alt='logo' />
            </Col>
            <Col span={14} />
            <Col span={4}>
              <LanguageButtons />
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item><FormattedMessage id='ThoughtWorksSchool' /></Breadcrumb.Item>
            <Breadcrumb.Item><FormattedMessage id='styleGuide' /></Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <LeftMenu />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            ThoughtWorks School ©2017 Created by Ant UED
          </Footer>
      </Layout>
    )
  }
}

export default TwsLayout
