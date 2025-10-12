import { NextRequest } from 'next/server';
import { proxyRequest } from '@/lib/proxy';
import { API_BASE_URL } from '@/lib/config';

export async function GET(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  return proxyRequest(request, `${API_BASE_URL}${pathname}/`);
}