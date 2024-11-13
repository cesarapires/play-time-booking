import { RegisterParams } from '@/domain/usecases/register'
import { faker } from '@faker-js/faker'

export const mockAddAccountParams = (): RegisterParams => {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    document: faker.number.int({min: 10000000000, max: 99999999999}).toString(),
    password: faker.internet.password(),
  }
}
