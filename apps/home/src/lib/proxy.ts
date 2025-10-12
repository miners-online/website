import { NextResponse } from 'next/server';

export async function proxyRequest(url: string, init?: RequestInit) {
  const response = await fetch(url, { ...init, redirect: 'manual' });

  const nextResponse = new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
  });

  // Forward all headers
  response.headers.forEach((value, key) => {
    nextResponse.headers.set(key, value);
  });

  return nextResponse;
}
