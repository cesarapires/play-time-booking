import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { Authentication } from '@/domain/usecases/authentication'

export const makeAuthentication = (): Authentication => {
    return new RemoteAuthentication()
}
