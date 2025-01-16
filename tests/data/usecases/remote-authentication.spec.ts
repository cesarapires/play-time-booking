import { Authentication } from '@/domain/usecases/authentication'
import { RemoteAuthentication } from '@/data/usecases/remote-authentication'
import { mockLoginParams } from '../../domain/mocks/login'

describe('RemoteAuthentication UseCase', () => {

    let sut: Authentication

    beforeEach(() => {
        sut = new RemoteAuthentication()
    })

    test('should call RemoteAuthentication with correct values', async () => {

        const tokenResult = await sut.auth(mockLoginParams())

        expect(tokenResult).toEqual({ accessToken: 'any_token' })
    })
})
