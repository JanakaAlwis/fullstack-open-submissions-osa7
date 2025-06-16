import axios from 'axios'

const getAll = async (blogId) => {
  const response = await axios.get(`/api/blogs/${blogId}/comments`)
  return response.data
}

const create = async (blogId, content) => {
  const response = await axios.post(`/api/blogs/${blogId}/comments`, { content })
  return response.data
}

export default { getAll, create }
