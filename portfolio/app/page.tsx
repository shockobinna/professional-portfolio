import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className="animate-fade-in">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Photo FIRST */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/me.jpg"
                alt="David"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text SECOND */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m David 👋
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Full-stack developer building modern web applications with Python,
              React, AI-assisted automation, and a strong cybersecurity background.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
              >
                About Me
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


