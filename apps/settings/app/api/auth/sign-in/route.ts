import { signIn } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';

export async function GET() {
  await signIn(logtoConfig);
  // signIn() internally handles the redirect to Logto
  return new Response(null); // Unreachable, but required by Next.js
}
