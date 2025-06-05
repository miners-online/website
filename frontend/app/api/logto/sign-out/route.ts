import { logtoConfig } from "@/lib/logto";
import { signOut } from '@logto/next/server-actions';

export const runtime = 'edge';

export async function GET() {
    await signOut(logtoConfig);
}