'use-client'

import { BuildCourtsList } from '@/domain/usecases/build-courts-list'
import { CourtsView } from '@/ui/Courts/Courts.view'

const Courts = (buildCourtsList: BuildCourtsList) => {
  return <CourtsView buildCourtsList={buildCourtsList} />
}

export default Courts
