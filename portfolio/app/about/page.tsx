"use client"

import PageTransition from "@/app/components/PageTransition"
import Link from "next/link"

const WORK_STATUS: "employed" | "open" = "employed"

export default function About() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-4xl px-6 py-16">

        {/* Header */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h1>

          <div className="mt-4 flex items-center gap-2">
            {WORK_STATUS === "employed" ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400">
                🟢 Currently employed
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-400">
                🔵 Open to opportunities
              </span>
            )}

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Open to conversations and interesting opportunities
            </span>
          </div>
        </section>

        {/* Intro */}
        <section className="mt-10 space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p>
            I’m David, a software developer with nearly five years of professional
            experience working across development, cybersecurity, and IT
            operations.
          </p>

          <p>
            I build practical, reliable software and enjoy understanding systems
            end-to-end — from writing code to seeing how it behaves in production
            and how it’s supported in real-world environments.
          </p>
        </section>

        {/* Journey */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            My professional journey
          </h2>

          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I began my career as a software developer, working on real
              applications and building a strong foundation in programming,
              problem-solving, and system design.
            </p>

            <p>
              After a career transition, I moved into cybersecurity as a SOC
              Analyst, where I gained hands-on experience with monitoring,
              incident response, and endpoint security in production
              environments.
            </p>

            <p>
              I later transitioned into an IT Support Analyst role, which is my
              current position. In this role, I work closely with users, systems,
              and live applications — solving issues, improving reliability, and
              ensuring continuity.
            </p>

            <p>
              Throughout all these transitions, I never lost contact with
              programming. I continued building software, automating workflows,
              and developing personal and professional projects — not as a career
              switch, but as continuous growth as a developer.
            </p>
          </div>
        </section>

        {/* How I work */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            How I work
          </h2>

          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• I value clarity, maintainability, and real-world usability</li>
            <li>• I take time to understand problems before writing code</li>
            <li>• I’m comfortable working across technical and non-technical teams</li>
            <li>• I care deeply about reliability, observability, and long-term impact</li>
          </ul>
        </section>

        {/* Technical focus */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            Technical focus
          </h2>

          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Full-stack web development (React, Next.js, TypeScript)</li>
            <li>• Python backend development and APIs (Django, Fast Api)</li>
            <li>• AI-powered tools and automation (including RAG systems)</li>
            <li>• Database-driven applications</li>
            <li>• Secure and maintainable system design</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            Credentials & certifications
          </h2>

          <div className="mt-4 rounded-xl border border-gray-200 dark:border-neutral-800 p-6">
            <p className="font-medium">
              AWS Certified Cloud Practitioner
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Validated foundational knowledge of cloud computing concepts, core AWS
              services, security best practices, and cloud pricing and billing models.
            </p>

            <p className="mt-2 font-medium">
              CrowdStrike Certified Falcon Administrator (CCFA)
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Demonstrated expertise in endpoint security, host management, and
              real-world security operations using the CrowdStrike Falcon
              platform.
            </p>
            
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            Continuous Learning & Professional Development
          </h2>

          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Advanced Python programming and backend development</li>
            <li>• Modern React & Next.js application architecture</li>
            <li>• SQL, relational databases, and data modeling</li>
            <li>• Cybersecurity fundamentals and SOC operations</li>
            <li>• AI-assisted development and Retrieval-Augmented Generation (RAG)</li>
          </ul>
        </section>


        {/* Looking for */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            What I’m looking for
          </h2>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            I’m interested in software development roles where I can contribute
            to meaningful products, collaborate with thoughtful teams, and apply
            both engineering and systems knowledge to solve real problems.
          </p>
        </section>

        {/* Closing */}
        <section className="mt-16">
          <p className="text-gray-600 dark:text-gray-400">
            Curious to see what I’ve been building?
          </p>

          <div className="mt-4 flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              View projects
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 dark:border-neutral-800 px-5 py-3 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              Get in touch
            </Link>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}

