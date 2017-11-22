import React, { Component } from 'react'
import TwsLayout from './components/tws-layout'
import { LocaleProvider } from 'antd'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import locales from './locales'

import ScoreSheetTable from './components/custom-component/score-sheet-table'
import TextEditTable from './components/custom-component/text-edit-table'
import SectionPresentation from './components/custom-component/section-presentation/index'
import Task from './components/custom-component/section-presentation/Task'
import Section from './components/custom-component/section-presentation/Section'

import ColorsDemo from './components/basic/colors-demo'
import Gaps from './components/basic/gaps-demo'
import ButtonDemo from './components/ui-component/button-demo'
import PopConfirmDemo from './components/ui-component/popconfirm-demo'
import PaginationComponent from './components/ui-component/pagination-component'
import BreadcrumbDemo from './components/ui-component/breadcrumb-demo'
import MenuDemo from './components/ui-component/menu-demo'
import CardDemo from './components/ui-component/card-demo'
import TabsDemo from './components/ui-component/tabs-demo'
import ExpandCollapseDemo from './components/ui-component/expand-collapse-demo'

import cssRule from './components/rules/css-rule'

import FormDemo from './components/custom-component/form-demo'
import MarkdownEditorDemo from './components/custom-component/markdown-editor-demo'

import Spike from './components/spike'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render () {
    const langData = locales[this.props.lang] || locales['en']
    return (
      <IntlProvider locale={langData.intlLocale} messages={langData.intlMessage}>
        <LocaleProvider locale={langData.locale}>
          <BrowserRouter>
            <TwsLayout>
              <Route exact path='/' component={cssRule}/>

              <Route path='/colors' component={ColorsDemo}/>
              <Route path='/gaps' component={Gaps}/>
              <Route path='/buttons' component={ButtonDemo}/>
              <Route path='/popConfirm' component={PopConfirmDemo}/>
              <Route path='/pagination' component={PaginationComponent}/>
              <Route path='/breadcrumb' component={BreadcrumbDemo}/>
              <Route path='/menu' component={MenuDemo}/>
              <Route path='/card' component={CardDemo}/>
              <Route path='/tabs' component={TabsDemo}/>
              <Route path='/expandCollapse' component={ExpandCollapseDemo}/>

              <Route path='/form' component={FormDemo}/>
              <Route path='/cssRule' component={cssRule}/>

              <Route path='/markdownEditor' component={MarkdownEditorDemo}/>

              <Route path='/scoreSheet' component={ScoreSheetTable}/>
              <Route path='/textEdit' component={TextEditTable}/>

              <Route path='/sectionPresentation' component={SectionPresentation}/>
              <Route path='/sectionPresentation/task' component={Task}/>
              <Route path='/sectionPresentation/task/section' component={Section}/>

              <Route path='/spike' component={Spike}/>
              <Route path='/task' component={Task}/>
            </TwsLayout>
          </BrowserRouter>
        </LocaleProvider>
      </IntlProvider>

    )
  }
}

const mapStateToProps = ({lang}) => ({lang})

export default connect(mapStateToProps)(App)
