export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon mark */}
      <div className="relative w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#4F7DF3" />
          <path d="M10 22L16 10L22 22H10Z" fill="white" fillOpacity="0.9" />
          <path d="M13 22L16 16L19 22H13Z" fill="white" fillOpacity="0.3" />
        </svg>
      </div>
      {/* Wordmark */}
      <span className="text-lg font-semibold tracking-tight text-black font-[var(--font-heading)]">
        Nexora<span className="text-primary">.</span>
      </span>
    </div>
  )
}