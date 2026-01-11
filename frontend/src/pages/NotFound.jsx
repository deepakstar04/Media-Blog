import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="text-center mt-32">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-textSecondary mb-6">
        Page not found
      </p>
      <Link to="/" className="text-primary underline">
        Go back home
      </Link>
    </div>
  )
}
