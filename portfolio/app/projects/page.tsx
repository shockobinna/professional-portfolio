import ProjectCard from "../components/ProjectCard";
// import { projects } from "./data";
import { getProjects } from "@/lib/queries";
import type { Project } from "@/types/project"

export default async function ProjectsPage() {
   const projects = await getProjects();
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project:Project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}
