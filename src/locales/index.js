import enUS from 'antd/lib/locale-provider/en_US'
import {addLocaleData} from 'react-intl'
import zhLocaleData from 'react-intl/locale-data/zh'

import en from './en-US.messages'
import zh from './zh-Hans-CN.messages'

addLocaleData(zhLocaleData)

const locales = {
  en: {
    locale: enUS,
    intlLocale: 'en-US',
    intlMessage: en
  },
  zh: {
    intlLocale: 'zh-Hans',
    intlMessage: zh
  }
}

export default locales
