import * as jose from 'jose'
import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/env'

const { jwtSecret } = env

const jwtConfig = {
  secret: new TextEncoder().encode(jwtSecret),
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  try {
    jose.jwtVerify(token, jwtConfig.secret)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}
