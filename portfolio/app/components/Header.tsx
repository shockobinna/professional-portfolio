"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-gray-200 dark:border-neutral-800
        bg-white/80 dark:bg-neutral-950/80
        backdrop-blur
      "
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          David
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink href="/" active={pathname === "/"}>Home</NavLink>
          <NavLink href="/projects" active={pathname === "/projects"}>Projects</NavLink>
          <NavLink href="/about" active={pathname === "/about"}>About</NavLink>

          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <div className="flex flex-col gap-2 px-6 py-4">
            <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink href="/projects" onClick={() => setOpen(false)}>Projects</MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>Hire Me!</MobileLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string
  children: React.ReactNode
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        rounded-lg px-4 py-2 text-sm font-medium transition
        ${
          active
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
        }
      `}
    >
      {children}
    </Link>
  )
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        rounded-lg px-4 py-3
        text-sm font-medium
        text-gray-700 dark:text-gray-300
        hover:bg-gray-100 dark:hover:bg-neutral-800
      "
    >
      {children}
    </Link>
  )
}
