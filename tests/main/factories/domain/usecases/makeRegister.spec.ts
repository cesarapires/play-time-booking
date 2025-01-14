import { makeRegister } from '@/main/factories/domain/usecases/makeRegister'
import { RemoteRegister } from '@/data/usecases/remote-register'

describe('makeRegister Factory', () => {
    it('should create an instance of RemoteRegister', () => {
        const register = makeRegister()
        expect(register).toBeInstanceOf(RemoteRegister)
    })
})
