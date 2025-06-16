import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import userReducer from './userReducer'
import notificationReducer from './notificationReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
  blogs: blogReducer,
  users: userReducer,
  notification: notificationReducer,
  comments: commentsReducer
})
