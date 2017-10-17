import { combineReducers } from 'redux'

const lang = (state = 'cn', action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return action.lang
    default:
      return state
  }
}

export default combineReducers({
  lang
})
