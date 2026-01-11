/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  if (!date) return ""
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

/**
 * Calculate reading time (Medium-style)
 * Avg reading speed: 200 words/min
 */
export const calculateReadingTime = (text = "") => {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

/**
 * Truncate long text
 */
export const truncateText = (text = "", length = 150) => {
  if (text.length <= length) return text
  return text.slice(0, length) + "..."
}

/**
 * Generate slug from title
 */
export const generateSlug = (title = "") => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

/**
 * Scroll to top utility
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

/**
 * Debounce function
 */
export const debounce = (fn, delay = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
