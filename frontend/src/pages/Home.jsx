import BlogCard from "@/components/blog/BlogCard"

const mockBlogs = [
  { id: 1, title: "Build Better React Apps", content: "React best practices...", createdAt: new Date() },
  { id: 2, title: "Why Writing Matters", content: "Writing helps thinking...", createdAt: new Date() },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-12 ">
        <h1 className="text-5xl font-bold mb-4 mx-8 text-center">
          Stay curious.
        </h1>
        <p className="text-xl text-textSecondary max-w-2xl px-8 mx-auto">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </section>

      {/* Categories */}
      <div className="flex gap-3 mb-10 flex-wrap text-center justify-center">
        {["Technology", "Design", "Startup", "Life"].map((cat) => (
          <span
            key={cat}
            className="px-4 py-1.5 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-200"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Featured Blogs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 mx-auto text-center">
          Featured stories
        </h2>

        {mockBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
    </div>
  )
}
