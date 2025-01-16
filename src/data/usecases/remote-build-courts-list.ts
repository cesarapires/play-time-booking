import { Courts } from '@/domain/models/court-model'
import { BuildCourtsList } from '@/domain/usecases/build-courts-list'
import { mockCourtsList } from '../../../tests/domain/mocks/courts'

export class RemoteBuildCourtsList implements BuildCourtsList {
  async get(): Promise<Courts[]> {
    return mockCourtsList()
  }
}
