import { signOut } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';

export async function GET() {
  await signOut(logtoConfig, "https://minersonline.uk");
  // signOut() internally handles the redirect to Logto
  return new Response(null); // Unreachable, but required by Next.js
}
