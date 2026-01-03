// import type { Metadata } from "next";
// import { projects } from "../data";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// // ✅ SEO per project
// export async function generateMetadata(
//   { params }: Props
// ): Promise<Metadata> {
//   const { slug } = await params;

//   const project = projects.find(
//     (p) => p.slug === slug
//   );

//   if (!project) {
//     return {
//       title: "Project not found | David",
//     };
//   }

//   return {
//     title: `${project.title} | David`,
//     description: project.description,
//   };
// }

// // ✅ Page UI
// export default async function ProjectPage({ params }: Props) {
//   const { slug } = await params;

//   const project = projects.find(
//     (p) => p.slug === slug
//   );

//   if (!project) {
//     return <p className="p-8">Project not found.</p>;
//   }

//   return (
//   <main className="min-h-screen p-8">
//     <div className="mx-auto max-w-3xl">
//       <h1 className="text-3xl font-bold">{project.title}</h1>

//       <p className="mt-4 text-gray-700">
//         {project.description}
//       </p>

//       <div className="mt-8">
//         <h3 className="text-lg font-semibold">
//           Tech stack
//         </h3>

//         <div className="mt-3 flex flex-wrap gap-2">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   </main>
// );

// }
import type { Metadata } from "next"
import { getProjectBySlug } from "@/lib/queries"
import type { Project } from "@/types/project"

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

  return {
    title: `${project.title} | David`,
    description: project.description,
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
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 text-gray-700">
          {project.description}
        </p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">
            Tech stack
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.demoVideoUrl && (
        <div className="mt-8">
          <a
            href={project.demoVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            ▶ Watch demo
          </a>
        </div>
)}

      </div>
    </main>
  )
}
