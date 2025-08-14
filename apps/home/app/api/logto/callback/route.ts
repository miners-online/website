import { handleSignIn } from '@logto/next/server-actions';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { logtoConfig } from '@/lib/logto';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    await handleSignIn(logtoConfig, searchParams);

    const cookieStore = await cookies();
    const nextUrl = cookieStore.get('nextUrl')?.value || '/';

    redirect(nextUrl);
}