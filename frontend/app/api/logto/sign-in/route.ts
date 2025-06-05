import { logtoConfig } from "@/lib/logto";
import { signIn } from '@logto/next/server-actions';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    await signIn(logtoConfig);
}