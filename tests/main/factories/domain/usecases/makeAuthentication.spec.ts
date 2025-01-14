import { makeAuthentication } from '@/main/factories/domain/usecases/makeAuthentication'
import { RemoteAuthentication } from '@/data/usecases/remote-authentication'

describe('makeAuthentication Factory', () => {
    test('should create an instance of RemoteAuthentication', () => {
        const authentication = makeAuthentication()
        expect(authentication).toBeInstanceOf(RemoteAuthentication)
    })
})
