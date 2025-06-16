import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import notificationReducer from './notificationReducer'
import blogsReducer from './blogsReducer'
import userReducer from './userReducer'
import usersReducer from './usersReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    blogs: blogsReducer,
    user: userReducer,
    users: usersReducer, 
  },
})

export default store
