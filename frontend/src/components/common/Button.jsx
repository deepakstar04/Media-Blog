import clsx from "clsx"

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-primary",
        {
          "bg-primary text-white hover:opacity-90":
            variant === "primary",
          "border border-gray-300 text-textPrimary hover:bg-gray-100":
            variant === "outline",
          "text-textPrimary hover:bg-gray-100":
            variant === "ghost",

          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-6 py-3 text-base": size === "lg",

          "opacity-60 cursor-not-allowed":
            disabled || isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  )
}
