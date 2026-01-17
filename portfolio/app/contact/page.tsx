"use client"

import { useState } from "react"
import PageTransition from '@/app/components/PageTransition'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // simulate submit (replace later with real API)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <PageTransition>
    <section className="animate-fade-in">
      <div className="mx-auto max-w-2xl px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let’s work together
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Have a project, role, or idea in mind?  
          I’d love to hear about it.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <Input label="Your name" type="text" />
            <Input label="Email address" type="email" />
            <Textarea label="Message" />

            <button
              type="submit"
              disabled={loading}
              className={`
                rounded-lg px-6 py-3 text-sm font-medium text-white
                transition
                ${loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"}
              `}
            >
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        ) : (
          <div className="mt-10 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950 p-6">
            <p className="font-medium text-green-800 dark:text-green-400">
              ✅ Message sent successfully
            </p>
            <p className="mt-2 text-sm text-green-700 dark:text-green-500">
              Thanks for reaching out — I’ll get back to you shortly.
            </p>
          </div>
        )}

      </div>
    </section>
    </PageTransition>
  )
}

/* Reusable fields */

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        required
        className="
          w-full rounded-lg border border-gray-300 dark:border-neutral-800
          bg-white dark:bg-neutral-900
          px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-600
        "
      />
    </div>
  )
}

function Textarea({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        rows={5}
        required
        className="
          w-full rounded-lg border border-gray-300 dark:border-neutral-800
          bg-white dark:bg-neutral-900
          px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-600
        "
      />
    </div>
  )
}
