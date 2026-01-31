import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";
// import { projects } from "./data";
import Pagination from "../components/Pagination"
import { getProjects } from "@/lib/queries";
import { getProjectsPaginated, getProjectsCount } from "@/lib/queries"
import type { Project } from "@/types/project"

// export default async function ProjectsPage() {
//    const projects = await getProjects();
//   return (
//     <PageTransition>
//     <main className="min-h-screen p-8">
//       <h1 className="text-2xl font-bold">Projects</h1>

//       <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project:Project) => (
//           <ProjectCard
//             key={project._id}
//             project={project}
//           />
//         ))}
//       </div>
//     </main>
//     </PageTransition>
//   );
// }

const PAGE_SIZE = 6

type Props = {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function ProjectsPage({ searchParams }: Props) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1

  const [projects, total] = await Promise.all([
    getProjectsPaginated(currentPage, PAGE_SIZE),
    getProjectsCount(),
  ])

  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <PageTransition>
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold">
          Projects
        </h1>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project:Project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
    </PageTransition>
  )
}