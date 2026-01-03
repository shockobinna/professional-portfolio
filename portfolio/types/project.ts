import type { Image } from "sanity"

export type SanityImage = {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export type Project = {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  tech: string[]
  coverImage?: Image
  // 🎬 Demo video (optional)
  demoVideoUrl?: string
}


