import { useEffect } from "react"

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  useEffect(() => {
    if (!isOpen) return

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg animate-fadeIn">
        {title && (
          <h2 className="mb-4 text-lg font-semibold">
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  )
}
