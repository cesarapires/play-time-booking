import { RemoteBuildCourtsList } from '@/data/usecases/remote-build-courts-list'
import { BuildCourtsList } from '@/domain/usecases/build-courts-list'

export const makeBuildCourtsList = (): BuildCourtsList => {
    return new RemoteBuildCourtsList()
}
