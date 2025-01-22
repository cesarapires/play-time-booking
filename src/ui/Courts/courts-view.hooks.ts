import { BuildCourtsList } from '@/domain/usecases/build-courts-list'
import { useEffect, useState } from 'react'
import { Courts } from '@/domain/models/court-model'

export const useCourtsList = (buildCourtsList: BuildCourtsList) => {
  const [courtsList, setCourtsList] = useState<Courts[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourtsList = async () => {
      try {
        setIsLoading(true)
        const data = await buildCourtsList.get()
        setCourtsList(data)
      } catch (err) {
        setError('Não foi possível carregar a lista de quadras.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCourtsList()
  }, [buildCourtsList])

  return { courtsList, isLoading, error }
}
