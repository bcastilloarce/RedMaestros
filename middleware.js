import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

// Configurar cliente de Redis con Upstash
const redis = new Redis({
  url: process.env.KV_URL,
  token: process.env.KV_REST_API_TOKEN,
})

// Configuración del rate limit
const RATE_LIMIT = 100 // Máximo de solicitudes por IP
const WINDOW_SEC = 15 * 60 // Ventana de tiempo en segundos (15 min)

export async function middleware(request) {
  // Aplicar solo a rutas de API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? '127.0.0.1'
    const key = `ratelimit:${ip}`

    try {
      // Obtener el número actual de solicitudes y TTL restante en paralelo
      let [count, ttl] = await Promise.all([
        redis.get(key),
        redis.ttl(key)
      ])

      count = parseInt(count) || 0 // Convertir a número
      ttl = ttl > 0 ? ttl : WINDOW_SEC // Si Redis devuelve -1 o -2, usar la ventana completa

      if (count >= RATE_LIMIT) {
        return new NextResponse(JSON.stringify({
          error: 'Demasiadas solicitudes desde esta IP, por favor intente más tarde.',
          retryAfter: ttl
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': ttl.toString(),
            'X-RateLimit-Limit': RATE_LIMIT.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': (Date.now() + ttl * 1000).toString()
          }
        })
      }

      // Aumentar el contador y establecer expiración si es la primera vez
      if (count === 0) {
        await redis.set(key, 1, { ex: WINDOW_SEC }) // Inicia contador con expiración
      } else {
        await redis.incr(key) // Incrementa contador en 1
      }

      // Respuesta normal con headers de rate limit
      const response = NextResponse.next()
      response.headers.set('X-RateLimit-Limit', RATE_LIMIT.toString())
      response.headers.set('X-RateLimit-Remaining', (RATE_LIMIT - count - 1).toString())
      response.headers.set('X-RateLimit-Reset', (Date.now() + ttl * 1000).toString())

      return response

    } catch (error) {
      console.error('Rate limiting error:', error)
      return NextResponse.next() // Si hay error, permitir la solicitud
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}
