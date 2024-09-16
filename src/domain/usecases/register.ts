import { AccountModel } from '@/domain/models/account-model'

export type RegisterParams = {
  name: string;
  document: string;
  email: string;
  password: string;
}

export interface Register {
  register(params: RegisterParams): Promise<AccountModel>;
}
