import { NextRequest } from 'next/server';
import { proxyRequest } from '@/lib/proxy';
import { API_BASE_URL } from '@/lib/config';

async function handler(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  return proxyRequest(request, `${API_BASE_URL}${pathname}/`);
}

// Export all HTTP methods
export { handler as GET, handler as POST, handler as PUT, handler as DELETE, handler as PATCH, handler as OPTIONS, handler as HEAD };