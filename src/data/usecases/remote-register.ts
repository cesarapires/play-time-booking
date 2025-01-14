import { AccountModel } from '@/domain/models/account-model'
import { Register, RegisterParams } from '@/domain/usecases/register'

export class RemoteRegister implements Register {
  async perform(params: RegisterParams): Promise<AccountModel> {
      console.log(params)
      return { accessToken: 'any_token' }
  }
}
