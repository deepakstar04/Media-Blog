import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-content mx-auto px-4 pt-20 flex gap-8">
        {/* Page Content */}
        <section className="flex-1 min-w-0">
          <Outlet />
        </section>

        {/* Right Sidebar (Desktop Only) */}
        <Sidebar />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
