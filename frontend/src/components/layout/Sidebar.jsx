import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 border-l pl-6 sticky top-20 h-fit">
      
      {/* User Section */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold text-textPrimary">
          Recommended Writers
        </h3>

        <ul className="space-y-3">
          {[1, 2, 3].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-300" />
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Writer {item}
                </p>
                <Link
                  to="#"
                  className="text-xs text-primary hover:underline"
                >
                  Follow
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Topics */}
      <div>
        <h3 className="mb-3 font-semibold text-textPrimary">
          Recommended Topics
        </h3>

        <div className="flex flex-wrap gap-2">
          {["React", "JavaScript", "Startup", "Design"].map(
            (topic) => (
              <span
                key={topic}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs cursor-pointer hover:bg-gray-200"
              >
                {topic}
              </span>
            )
          )}
        </div>
      </div>
    </aside>
  )
}
