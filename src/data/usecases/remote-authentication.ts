import { AccountModel } from '@/domain/models/account-model'
import {
  Authentication,
  AuthenticationParams,
} from '@/domain/usecases/authentication'

export class RemoteAuthentication implements Authentication {
  async auth(params: AuthenticationParams): Promise<AccountModel> {
    console.log(params)
    return { accessToken: 'any_token' }
  }
}
