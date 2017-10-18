import React, { Component } from 'react'
import TwsLayout from './components/tws-layout'
import { LocaleProvider } from 'antd'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

import ScoreSheetTable from './components/score-sheet-table'
import Colors from './components/colors'
import Gaps from './components/gaps'
import General from './components/general'
import DP from './components/simple-components'

import locales from './locales'

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
              <Route exact path='/' component={Colors} />
              <Route path='/score-sheet' component={ScoreSheetTable} />
              <Route path='/colors' component={Colors} />
              <Route path='/gaps' component={Gaps} />
              <Route path='/general' component={General} />
              <Route path='/dp' component={DP} />
            </TwsLayout>
          </Router>
        </LocaleProvider>
      </IntlProvider>

    )
  }
}

const mapStateToProps = ({lang}) => ({lang})

export default connect(mapStateToProps)(App)
