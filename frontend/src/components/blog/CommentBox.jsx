import { useState } from "react"
import Button from "@/components/common/Button"
import { formatDate } from "@/utils/helpers"

export default function CommentBox() {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  const handleAddComment = () => {
    if (!comment.trim()) return

    setComments([
      {
        id: Date.now(),
        text: comment,
        createdAt: new Date().toISOString(),
      },
      ...comments,
    ])

    setComment("")
  }

  return (
    <div className="mt-10">
      <h3 className="mb-4 font-semibold text-lg">
        Comments
      </h3>

      <textarea
        placeholder="Write a comment..."
        className="w-full border rounded-md p-3 mb-3 resize-none"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button size="sm" onClick={handleAddComment}>
        Post Comment
      </Button>

      <div className="mt-6 space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="border-b pb-3">
            <p className="text-textPrimary">{c.text}</p>
            <span className="text-xs text-textSecondary">
              {formatDate(c.createdAt)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
