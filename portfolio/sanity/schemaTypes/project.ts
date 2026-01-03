import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tech",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "demoVideoUrl",
      title: "Demo Video URL",
      type: "url",
      description: "Link to demo video (YouTube, Loom, MP4, etc.)",
    }),
  ],
});
