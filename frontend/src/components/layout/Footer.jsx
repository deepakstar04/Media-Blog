export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-content mx-auto px-4 py-8 text-sm text-textSecondary flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p>
          © {new Date().getFullYear()} BlogSphere. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-textPrimary">
            About
          </a>
          <a href="#" className="hover:text-textPrimary">
            Privacy
          </a>
          <a href="#" className="hover:text-textPrimary">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
