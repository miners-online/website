import { logtoConfig } from "@/lib/logto";
import { signIn } from '@logto/next/server-actions';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const nextUrl = url.searchParams.get('next') || '/';

    // Store the next URL in session (using a cookie here)
    (await cookies()).set({
        name: 'nextUrl',
        value: nextUrl,
        path: '/',        // Make it accessible to your whole app
        httpOnly: true,   // Not accessible from client JS
        sameSite: 'lax',  // Adjust as needed
    });


    await signIn(logtoConfig);
}