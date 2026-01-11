import BlogCard from "@/components/blog/BlogCard"

const mockFeed = [
  { id: 1, title: "Daily React Tips", content: "Improve your React skills...", createdAt: new Date() },
]

export default function Feed() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">
        Your Feed
      </h1>

      {mockFeed.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}
