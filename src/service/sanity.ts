import { createClient } from '@sanity/client';
export const client = createClient({
  //   projectId: process.env.SANITY_PROJECT_ID,
  projectId: 'vsjp4pqu',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-12-02', // use current date (YYYY-MM-DD) to target the latest API version
  token:
    'skqAye2Dy50TqiZyFtQheKlq6dTj9Vyy8EiUmE8AGkDJ48juwHXPFXHY4zyDY0gI2pT6UMyOHBkjwVuLeUCLCFZ2htEaj583SDhpTl3sPurzIpNLCX9kxVBXaPisCShk46eafjDaTsktkwJ3dSHuGcVxWbhgR9aBvENOfKwMrmHHbMRmXSnJ', // Needed for certain operations like updating content or accessing previewDrafts perspective
});
