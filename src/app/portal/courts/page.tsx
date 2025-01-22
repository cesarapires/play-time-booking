'use client'

import { makeBuildCourtsList } from '@/main/factories/domain/usecases/makeBuildCourtsList'
import { CourtsView } from '@/ui/Courts/Courts.view'

const Courts = () => {
  const buildCourtsList = makeBuildCourtsList()

  return <CourtsView buildCourtsList={buildCourtsList} />
}

export default Courts
