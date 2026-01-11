import clsx from "clsx"

export default function Input({
  label,
  error,
  className,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm font-medium text-textPrimary">
          {label}
        </label>
      )}

      <input
        className={clsx(
          "w-full rounded-md border px-3 py-2 text-sm outline-none transition",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-primary",
          className
        )}
        {...props}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
