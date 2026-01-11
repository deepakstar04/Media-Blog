import CommentBox from "@/components/blog/CommentBox"
import LikeButton from "@/components/blog/LikeButton"
import { formatDate } from "@/utils/helpers"

export default function BlogDetails() {
  const blog = {
    title: "Build Better Products",
    content: "Long-form blog content goes here...",
    createdAt: new Date(),
    likes: 12,
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        {blog.title}
      </h1>

      <div className="text-textSecondary mb-8 flex justify-between">
        <span>{formatDate(blog.createdAt)}</span>
        <LikeButton blog={blog} />
      </div>

      <p className="leading-relaxed text-lg mb-10">
        {blog.content}
      </p>

      <CommentBox />
    </article>
  )
}
