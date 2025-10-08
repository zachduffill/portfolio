import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.headers.get('x-vercel-ip-country') || 'US';
  const redirectTo = country === 'HU' ? '/hu' : '/en';
  return NextResponse.redirect(new URL(redirectTo, request.url));
}
