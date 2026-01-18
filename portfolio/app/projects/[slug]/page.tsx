import Image from "next/image"
import type { Metadata } from "next"
import { getProjectBySlug } from "@/lib/queries"
// import type { Project } from "@/types/project"
import { urlFor } from "@/lib/sanityImage"

type Props = {
  params: Promise<{
    slug: string
  }>
}


// ✅ SEO per project
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project not found | David",
    }
  }

  const title = project.seoTitle ?? `${project.title} | David`
  const description = project.seoDescription ?? project.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: project.coverImage
        ? [
            {
              url: urlFor(project.coverImage)
                .width(1200)
                .height(630)
                .url(),
            },
          ]
        : [],
    },
  }
}


// ✅ Page UI
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return <p className="p-8">Project not found.</p>
  }

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 sm:py-8">
  <div className="mx-auto max-w-4xl">
    {/* Hero */}
    {project.coverImage && (
      <div className="relative mb-6 h-[220px] sm:h-[280px] md:h-[320px] w-full overflow-hidden rounded-2xl">
        <Image
          src={urlFor(project.coverImage)
            .width(1200)
            .height(600)
            .url()}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>
    )}

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      {project.title}
    </h1>

    <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300">
      {project.description}
    </p>

    {/* Demo video */}
    {project.demoVideoUrl && (
      <div className="mt-8">
        <a
          href={project.demoVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-black sm:px-6 sm:py-3 px-5 py-3 text-sm font-medium text-white active:scale-[0.98] transition"
        >
          ▶ Watch demo
        </a>
      </div>
    )}

    {/* Tech stack */}
    <section className="mt-12">
      <h3 className="text-lg font-semibold">
        Tech stack
      </h3>

      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs sm:text-sm text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  </div>
</main>
  )
}
