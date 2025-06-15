import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload
    },
    appendBlog(state, action) {
      state.push(action.payload)
    },
    updateBlog(state, action) {
      const updated = action.payload
      return state.map((b) => (b.id === updated.id ? updated : b))
    },
    removeBlog(state, action) {
      const id = action.payload
      return state.filter((b) => b.id !== id)
    },
  },
})

export const { setBlogs, appendBlog, updateBlog, removeBlog } = blogsSlice.actions

export const initializeBlogs = () => async (dispatch) => {
  const blogs = await blogService.getAll()
  dispatch(setBlogs(blogs))
}

export const createBlog = (blogData) => async (dispatch) => {
  const newBlog = await blogService.create(blogData)
  dispatch(appendBlog(newBlog))
}

export const likeBlog = (blog) => async (dispatch) => {
  const updatedBlog = { ...blog, likes: blog.likes + 1 }
  const returned = await blogService.update(blog.id, updatedBlog)
  dispatch(updateBlog(returned))
}

export const deleteBlog = (id) => async (dispatch) => {
  await blogService.remove(id)
  dispatch(removeBlog(id))
}

export default blogsSlice.reducer
