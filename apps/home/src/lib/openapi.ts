import { createOpenAPI } from 'fumadocs-openapi/server';

export const authentication = createOpenAPI({
  input: [`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/auth/open-api/generate-schema`],
});