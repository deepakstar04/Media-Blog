import axios from "axios"

/**
 * Base Axios instance
 * Change BASE_URL when backend is ready
 */
const api = axios.create({
  baseURL: "http://localhost:5000/api", // placeholder
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

/**
 * Request Interceptor
 * Attach auth token if exists
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

/**
 * Response Interceptor
 * Central error handling
 */
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Optional: auto logout handling
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }

    return Promise.reject(error.response?.data || error.message)
  }
)

export default api
