import { AuthenticationParams } from '@/domain/usecases/authentication'
import { faker } from '@faker-js/faker'

export const mockLoginParams = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}
