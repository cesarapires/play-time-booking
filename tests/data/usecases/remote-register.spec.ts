import { Register } from '@/domain/usecases/register'
import { RemoteRegister } from '@/data/usecases/remote-register'
import { mockAddAccountParams } from '../../domain/mocks/signup'

describe('RemoteAuthentication UseCase', () => {

    let sut: Register

    beforeEach(() => {
        sut = new RemoteRegister()
    })

    test('should call RemoteAuthentication with correct values', async () => {

        const tokenResult = await sut.perform(mockAddAccountParams())

        expect(tokenResult).toEqual({ accessToken: 'any_token' })
    })
})
