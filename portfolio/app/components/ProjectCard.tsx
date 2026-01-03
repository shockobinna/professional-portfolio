// import Link from "next/link";
// import type { Project } from "@/types/project"


// type ProjectCardProps = {
//   project: Project
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <article className="rounded-xl border p-6 hover:shadow-md transition">
//       <h3 className="text-xl font-semibold">
//         {project.title}
//       </h3>

//       <p className="mt-2 text-muted-foreground">
//         {project.description}
//       </p>

//       <ul className="mt-4 flex flex-wrap gap-2">
//         {project.tech.map((tech) => (
//           <li
//             key={tech}
//             className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
//           >
//             {tech}
//           </li>
          
//         ))}
//       </ul>
//       <Link
//         href={`/projects/${project.slug}`}
//         className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
//       >
//         View project →
//       </Link>
//     </article>
//   )
// }

import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/project"
import { urlFor } from "@/lib/sanityImage"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition">
      {/* Cover image */}
      {project.coverImage && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(project.coverImage)
              .width(600)
              .height(400)
              .url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
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
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          View project →
        </Link>
      </div>
    </article>
  )
}
