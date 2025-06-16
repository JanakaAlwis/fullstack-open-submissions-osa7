import { createSlice } from '@reduxjs/toolkit'
import commentService from '../services/comments'

const commentSlice = createSlice({
  name: 'comments',
  initialState: {},
  reducers: {
    setComments(state, action) {
      const { blogId, comments } = action.payload
      state[blogId] = comments
    },
    addComment(state, action) {
      const { blogId, comment } = action.payload
      state[blogId] = [...(state[blogId] || []), comment]
    }
  }
})

export const { setComments, addComment } = commentSlice.actions

export const initializeComments = (blogId) => async (dispatch) => {
  const comments = await commentService.getAll(blogId)
  dispatch(setComments({ blogId, comments }))
}

export const createComment = (blogId, content) => async (dispatch) => {
  const comment = await commentService.create(blogId, content)
  dispatch(addComment({ blogId, comment }))
}

export default commentSlice.reducer
