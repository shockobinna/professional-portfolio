import Link from "next/link"

type Props = {
  currentPage: number
  totalPages: number
}

export default function Pagination({
  currentPage,
  totalPages,
}: Props) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      {/* Previous */}
      {currentPage > 1 && (
        <Link
          href={`/projects?page=${currentPage - 1}`}
          className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
        >
          ← Prev
        </Link>
      )}

      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      {currentPage < totalPages && (
        <Link
          href={`/projects?page=${currentPage + 1}`}
          className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Next →
        </Link>
      )}
    </div>
  )
}
