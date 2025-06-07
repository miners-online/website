import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '');
    const url = request.nextUrl.clone();
    url.host = nonWwwHost;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
