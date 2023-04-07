import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { register } from './register'
import { verifiyJWT } from '@/http/middleware/verify-jwt'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)

  // rota de autenticação
  app.post('/sessions', authenticate)

  /** Autenticado */
  app.get('/me', { onRequest: [verifiyJWT] }, profile)
}
