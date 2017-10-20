import React, { Component } from 'react'
import {Radio} from 'antd'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

class LanguageButtons extends Component {
  constructor (args) {
    super(args)

    this.state = {
      lang: 'en'
    }
  }

  componentDidMount () {
    const {history, location} = this.props
    history.listen(this.updateLang.bind(this))
    this.updateLang(location)
  }

  updateLang (location) {
    const {lang = 'en'} = queryString.parse(location.search)
    this.props.changeLanguage(lang)
    this.setState({
      lang
    })
  }

  changeLocale (evt) {
    const lang = evt.target.value
    const {history, location} = this.props
    const parsed = queryString.parse(location.search)
    parsed.lang = lang
    location.search = queryString.stringify(parsed)
    history.push(location)
  }

  render () {
    return (<div style={{
      float: 'right'
    }}>
      <Radio.Group value={this.state.lang} onChange={this.changeLocale.bind(this)}>
        <Radio.Button key='en' value='en'>English</Radio.Button>
        <Radio.Button key='zh' value='zh'>中文</Radio.Button>
      </Radio.Group>
    </div>)
  }
}

const mapStateToProps = ({lang}) => ({lang})
const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (lang) => {
      dispatch({
        lang: lang,
        type: 'CHANGE_LANGUAGE'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LanguageButtons))
