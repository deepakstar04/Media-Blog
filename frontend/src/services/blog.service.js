import api from "./api"

/**
 * Get all blogs
 */
export const getBlogs = () => {
  return api.get("/blogs")
}

/**
 * Get single blog by slug or id
 */
export const getBlogById = (id) => {
  return api.get(`/blogs/${id}`)
}

/**
 * Create new blog
 */
export const createBlog = (blogData) => {
  return api.post("/blogs", blogData)
}

/**
 * Update existing blog
 */
export const updateBlog = (id, blogData) => {
  return api.put(`/blogs/${id}`, blogData)
}

/**
 * Delete blog
 */
export const deleteBlog = (id) => {
  return api.delete(`/blogs/${id}`)
}

/**
 * Like / Unlike blog
 */
export const toggleLike = (id) => {
  return api.post(`/blogs/${id}/like`)
}

/**
 * Get blogs by author
 */
export const getBlogsByUser = (userId) => {
  return api.get(`/users/${userId}/blogs`)
}
