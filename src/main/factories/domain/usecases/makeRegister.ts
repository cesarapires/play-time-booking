import { RemoteRegister } from '@/data/usecases/remote-register'
import { Register } from '@/domain/usecases/register'

export const makeRegister = (): Register => {
    return new RemoteRegister()
}
