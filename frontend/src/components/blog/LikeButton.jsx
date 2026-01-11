import { useState } from "react"

export default function LikeButton({ blog }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(blog?.likes || 0)

  const toggleLike = () => {
    setLiked(!liked)
    setCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  return (
    <button
      onClick={toggleLike}
      className="flex items-center gap-1 text-sm hover:text-primary transition"
    >
      <span>{liked ? "❤️" : "🤍"}</span>
      <span>{count}</span>
    </button>
  )
}
