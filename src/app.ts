import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { usersRoutes } from './http/controllers/users/routes'
import { gymsRoutes } from './http/controllers/gyms/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(usersRoutes)
app.register(gymsRoutes)

app.setErrorHandler((error, _request, replay) => {
  if (error instanceof ZodError) {
    return replay
      .status(400)
      .send({ messsage: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  } else {
    // TODO:Aqui deveria ser acoplado alguma ferramenta de logging para pegar esse erro
  }

  return replay.status(500).send({
    message: 'Internal server error',
  })
})
