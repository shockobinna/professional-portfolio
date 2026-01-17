
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/project"
import { urlFor } from "@/lib/sanityImage"


type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        h-full
        flex
        flex-col
        overflow-hidden
        rounded-xl
        border
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Cover image */}
      {project.coverImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={urlFor(project.coverImage)
              .width(600)
              .height(400)
              .url()}
            alt={project.title}
            fill
            className="
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-gray-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="
            mt-4
            inline-block
            text-sm
            font-medium
            text-blue-600
            transition-colors
            hover:text-blue-800
          "
        >
          View project →
        </Link>
      </div>
    </article>
  )
}
