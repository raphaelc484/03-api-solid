import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { register } from './register'
import { verifiyJWT } from '@/http/middleware/verify-jwt'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)

  // rota de autenticação
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Autenticado */
  app.get('/me', { onRequest: [verifiyJWT] }, profile)
}
