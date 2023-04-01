import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetProfileUseCase } from '../get-user-profile'

export function makeGetUserProfileUseCase() {
  const userRepository = new PrismaUsersRepository()
  const useCase = new GetProfileUseCase(userRepository)

  return useCase
}
