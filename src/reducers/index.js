// import { combineReducers } from 'redux'
import { defaultText } from '../actions'
const text = (state = defaultText, action) => {
  switch (action.type) {
    case 'changeStore':
      return action.text
    default:
      return state
  }
}

// export default combineReducers({
//   text
// })
export default text