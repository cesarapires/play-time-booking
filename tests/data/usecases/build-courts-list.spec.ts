import { RemoteBuildCourtsList } from '@/data/usecases/remote-build-courts-list'
import { BuildCourtsList } from '@/domain/usecases/build-courts-list'
import { mockCourtsList } from '../../domain/mocks/courts'

describe('RemoteBuildCourtsList UseCase', () => {

    let sut: BuildCourtsList

    beforeEach(() => {
        sut = new RemoteBuildCourtsList()
    })

    test('should call RemoteBuildCourtsList with correct values', async () => {

        const courtsList = await sut.get()

        expect(courtsList).toEqual(mockCourtsList())
    })
})
