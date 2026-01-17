import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";
// import { projects } from "./data";
import { getProjects } from "@/lib/queries";
import type { Project } from "@/types/project"

export default async function ProjectsPage() {
   const projects = await getProjects();
  return (
    <PageTransition>
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project:Project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </main>
    </PageTransition>
  );
}
