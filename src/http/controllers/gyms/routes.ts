import { verifiyJWT } from '@/http/middleware/verify-jwt'
import { FastifyInstance } from 'fastify'
import { search } from './search'
import { nearby } from './nearby'
import { create } from './create'
import { verifyUserRole } from '@/http/middleware/verify-role-user'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifiyJWT)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', { onRequest: [verifyUserRole('ADMIN')] }, create)
}
