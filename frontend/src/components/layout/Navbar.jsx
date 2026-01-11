import { Link } from "react-router-dom"
import Button from "@/components/common/Button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b">
      <div className="max-w-content mx-auto h-16 px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-textPrimary"
        >
          BlogSpace
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/feed"
            className="text-textSecondary hover:text-textPrimary text-xl hover:opacity-90 transition"
          >
            Feed
          </Link>

          <Link
            to="/write"
            className="bg-primary text-amber-600 px-4 py-1.5 rounded-full text-xl hover:opacity-90 transition"
          >
            Write
          </Link>

          <Link
            to="/login"
            className="text-textSecondary hover:text-textPrimary bg-blue-900 px-3 py-2 rounded-full text-xl hover:opacity-90 transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Menu Placeholder */}
        <Button className="md:hidden text-textPrimary">
          ☰
        </Button>
      </div>
    </nav>
  )
}
