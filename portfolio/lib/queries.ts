import { sanityClient } from "./sanity.client";
import type { Project } from "@/types/project"

export async function getProjects(): Promise<Project[]> {
  return sanityClient.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      tech,
      coverImage,

    }
  `);
}



export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  return sanityClient.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      description,
      slug,
      tech,
      coverImage,
      demoVideoUrl
    }
    `,
    { slug }
  )
}


export async function getProjectsPaginated(
  page: number,
  pageSize: number
) {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  return sanityClient.fetch(
    `*[_type == "project"] | order(_createdAt desc)[$start...$end]{
      _id,
      title,
      "slug":slug.current,
      description,
      tech,
      coverImage
    }`,
    { start, end }
  )
}

export async function getProjectsCount() {
  return sanityClient.fetch(
    `count(*[_type == "project"])`
  )
}

