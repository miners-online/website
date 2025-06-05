import { logtoConfig } from "@/lib/logto";
import { signIn } from '@logto/next/server-actions';

export const runtime = 'edge';

export async function GET() {
    await signIn(logtoConfig);
}