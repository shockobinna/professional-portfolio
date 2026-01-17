import Image from "next/image"
import Link from "next/link"
import { Briefcase, Layers, Sparkles } from "lucide-react"


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

          {/* Hero  intro */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m David 👋
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Full-stack developer building modern web applications with Python,
              React, AI-assisted automation, and a strong cybersecurity background.
            </p>

            {/* Stats */}

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">

              <div className="flex items-center gap-2 animate-fade-in [animation-delay:100ms]">
                <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-gray-900 dark:text-white">4+</span>
                <span>Years Experience</span>
              </div>

              <div className="flex items-center gap-2 animate-fade-in [animation-delay:200ms]">
                <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="font-semibold text-gray-900 dark:text-white">6+</span>
                <span>Projects Built</span>
              </div>

              <div className="flex items-center gap-2 animate-fade-in [animation-delay:300ms]">
                <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Full-Stack
                </span>
                <span>& AI</span>
              </div>

            </div>


            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-700 dark:text-gray-500">
                Focus Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Full-stack development",
                  "AI / RAG systems",
                  "Automation",
                  "Modern UI",
                  "APIs & Databases",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      bg-gray-100 dark:bg-neutral-800
                      border border-gray-200 dark:border-neutral-700
                      px-3 py-1
                      text-xs
                      text-gray-700 dark:text-gray-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>



            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="rounded-lg
                            border border-gray-300 dark:border-neutral-700
                            px-6 py-3
                            text-sm font-medium
                            transition
                            hover:bg-gray-100 dark:hover:bg-neutral-800
                            "
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


