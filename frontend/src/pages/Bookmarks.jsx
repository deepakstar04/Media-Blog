import useBlogStore from "@/store/blogStore"
import BlogCard from "@/components/blog/BlogCard"

export default function Bookmarks() {
  const { bookmarks } = useBlogStore()

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">
        Bookmarks
      </h1>

      {bookmarks.length === 0 && (
        <p className="text-textSecondary">
          No saved stories yet.
        </p>
      )}

      {bookmarks.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}
