'use client'

import {
  Flex,
  Box,
  Heading,
  ButtonGroup,
  Button,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react'

import CourtsCard from './courts-card'
import {
  COURTS_TITLE_TEXT,
  CREATE_NEW_COURT_BUTTON_TEXT,
} from '@/ui/Courts/courts-view.dictionary'
import { BuildCourtsList } from '@/domain/usecases/build-courts-list'
import { Courts } from '@/domain/models/court-model'
import { useEffect, useState } from 'react'

interface CourtsViewProps {
  buildCourtsList: BuildCourtsList;
}

export const CourtsView: React.FC<CourtsViewProps> = async ({ buildCourtsList }) => {

  const [courtsList, setCourtsList] = useState<Courts[]>([])

  useEffect(() => {
    const fetchCourtsList = async () => {
      const data = await buildCourtsList.get()
      setCourtsList(data)
    }
    fetchCourtsList()
  }, [buildCourtsList])

  return (
    <Box bg="gray.100" w="100%" h="100%" p={4} color="white">
      <Flex mb="8" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading color="gray.700" as="h2" size="xl">
            {COURTS_TITLE_TEXT}
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="green">{CREATE_NEW_COURT_BUTTON_TEXT}</Button>
        </ButtonGroup>
      </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        { courtsList.map((courtsCardInfo, index) => (
          <CourtsCard key={index} {...courtsCardInfo} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
