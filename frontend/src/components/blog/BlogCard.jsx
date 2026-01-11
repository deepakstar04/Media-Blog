import { Link } from "react-router-dom"
import { formatDate, truncateText, calculateReadingTime } from "@/utils/helpers"
import LikeButton from "./LikeButton"

export default function BlogCard({ blog }) {
  if (!blog) return null

  return (
    <article className="border-b py-6 flex gap-4">
      
      {/* Content */}
      <div className="flex-1">
        <Link
          to={`/blog/${blog.id}`}
          className="block"
        >
          <h2 className="text-xl font-semibold mb-2 text-textPrimary">
            {blog.title}
          </h2>

          <p className="text-textSecondary mb-3">
            {truncateText(blog.content, 160)}
          </p>
        </Link>

        <div className="flex items-center justify-between text-sm text-textSecondary">
          <span>
            {formatDate(blog.createdAt)} ·{" "}
            {calculateReadingTime(blog.content)}
          </span>

          <LikeButton blog={blog} />
        </div>
      </div>

      {/* Thumbnail */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="h-24 w-24 object-cover rounded-md"
        />
      )}
    </article>
  )
}
