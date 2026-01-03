import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "pwb2ioa9", // your project id
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
