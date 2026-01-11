import { create } from "zustand"

const getStoredUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

const getStoredToken = () => {
  return localStorage.getItem("token")
}

const useAuthStore = create((set) => ({
  user: getStoredUser(),
  token: getStoredToken(),
  isAuthenticated: !!getStoredToken(),

  login: (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData))
    localStorage.setItem("token", token)

    set({
      user: userData,
      token,
      isAuthenticated: true,
    })
  },

  logout: () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    })
  },
}))

export default useAuthStore
