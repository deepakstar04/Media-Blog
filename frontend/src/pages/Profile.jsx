import BlogCard from "@/components/blog/BlogCard"

export default function Profile() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">John Doe</h1>
        <p className="text-textSecondary">Writer · Developer</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">
        Stories
      </h2>

      <BlogCard blog={{ id: 1, title: "My Journey", content: "Story...", createdAt: new Date() }} />
    </div>
  )
}
