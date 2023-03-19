import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthencateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authencateUseCase = new AuthencateUseCase(prismaUsersRepository)

  return authencateUseCase
}
