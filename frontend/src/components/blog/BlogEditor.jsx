import { useState } from "react"
import Button from "@/components/common/Button"
import { generateSlug } from "@/utils/helpers"

export default function BlogEditor({ onSubmit }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handlePublish = () => {
    if (!title || !content) return

    const blogData = {
      title,
      content,
      slug: generateSlug(title),
      createdAt: new Date().toISOString(),
    }

    onSubmit?.(blogData)
  }

  return (
    <div className="max-w-3xl mx-auto">
      
      <input
        type="text"
        placeholder="Title"
        className="w-full text-4xl font-semibold outline-none mb-6"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Tell your story..."
        className="w-full `min-h-[300px] text-lg outline-none resize-none leading-relaxed"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="mt-6 flex justify-end">
        <Button onClick={handlePublish}>
          Publish
        </Button>
      </div>
    </div>
  )
}
