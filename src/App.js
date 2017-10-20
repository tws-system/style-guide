import React, { Component } from 'react'
import TwsLayout from './components/tws-layout'
import { LocaleProvider } from 'antd'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import locales from './locales'

import ScoreSheetTable from './components/custom-component/score-sheet-table'
import ColorsDemo from './components/basic/colors-demo'
import Gaps from './components/basic/gaps-demo'
import ButtonDemo from './components/ui-component/button-demo'
import PopConfirmDemo from './components/ui-component/popconfirm-demo'
import PaginationComponent from './components/ui-component/pagination-component'
import BreadcrumbDemo from './components/ui-component/breadcrumb-demo'
import MenuDemo from './components/ui-component/menu-demo'
import CardDemo from './components/ui-component/card-demo'

import Spike from './components/spike'

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render () {
    const langData = locales[this.props.lang] || locales['en']
    return (
      <IntlProvider locale={langData.intlLocale} messages={langData.intlMessage}>
        <LocaleProvider locale={langData.locale}>
          <Router>
            <TwsLayout>
              <Route exact path='/' component={ColorsDemo} />
              <Route path='/score-sheet' component={ScoreSheetTable} />
              <Route path='/colors' component={ColorsDemo} />
              <Route path='/gaps' component={Gaps} />
              <Route path='/buttons' component={ButtonDemo} />
              <Route path='/popconfirm' component={PopConfirmDemo} />
              <Route path='/pagination' component={PaginationComponent} />
              <Route path='/breadcrumb' component={BreadcrumbDemo} />
              <Route path='/menu' component={MenuDemo} />
              <Route path='/card' component={CardDemo} />

              <Route path='/spike' component={Spike} />
            </TwsLayout>
          </Router>
        </LocaleProvider>
      </IntlProvider>

    )
  }
}

const mapStateToProps = ({lang}) => ({lang})

export default connect(mapStateToProps)(App)
