import { makeBuildCourtsList } from '@/main/factories/domain/usecases/makeBuildCourtsList'
import { RemoteBuildCourtsList } from '@/data/usecases/remote-build-courts-list'

describe('makeBuildCourtsList Factory', () => {
    test('should create an instance of RemoteBuildCourtsList', () => {
        const buildCourtsList = makeBuildCourtsList()
        expect(buildCourtsList).toBeInstanceOf(RemoteBuildCourtsList)
    })
})
