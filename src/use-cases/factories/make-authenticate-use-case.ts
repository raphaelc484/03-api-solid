import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthencateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const userRepository = new PrismaUsersRepository()
  const authencateUseCase = new AuthencateUseCase(userRepository)

  return authencateUseCase
}
