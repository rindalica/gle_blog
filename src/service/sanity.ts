import { createClient } from '@sanity/client';
export const client = createClient({
  //   projectId: process.env.SANITY_PROJECT_ID,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-12-02', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});
