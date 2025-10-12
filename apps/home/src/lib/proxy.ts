import { NextRequest, NextResponse } from 'next/server';

export async function proxyRequest(request: NextRequest, targetUrl: string) {
  // Create a headers object for the fetch call
  const headers = new Headers(request.headers);

  // Optional: remove headers that might interfere with the backend
  headers.delete('host'); // backend should handle its own host

  // Perform fetch to backend
  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body, // only include body for non-GET/HEAD
    redirect: 'manual', // do not follow redirects
  });

  // Forward the response back to the client
  const nextResponse = new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
  });

  // Copy response headers
  response.headers.forEach((value, key) => {
    nextResponse.headers.set(key, value);
  });

  return nextResponse;
}
