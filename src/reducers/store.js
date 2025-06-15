import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'
import blogsReducer from './blogsReducer'
import userReducer from './userReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    blogs: blogsReducer,
    user: userReducer,
  },
})

export default store
