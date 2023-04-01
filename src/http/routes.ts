import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  // rota de autenticação
  app.post('/sessions', authenticate)

  /** Autenticado */
  app.get('/me', profile)
}
