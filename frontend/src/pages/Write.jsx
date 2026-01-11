import BlogEditor from "@/components/blog/BlogEditor"
import useBlogStore from "@/store/blogStore"

export default function Write() {
  const { addBlog } = useBlogStore()

  return (
    <BlogEditor
      onSubmit={(blog) => {
        addBlog(blog)
        alert("Blog published (frontend only)")
      }}
    />
  )
}
