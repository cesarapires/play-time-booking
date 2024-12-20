import { Courts } from '@/domain/models/court-model'

export interface BuildCourtsList {
  get (): Promise<Courts[]>
}
