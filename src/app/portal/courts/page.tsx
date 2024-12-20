'use client'

import CourtsCard from '@/ui/courts/courts-card'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'

const courtsCardInfo = {
  name: 'Volleyball courts',
  urlImage:
    'https://www.sportsimports.com/wp-content/uploads/cropped-best_volleyball_equipment.jpeg',
  price: '$30/hour',
}

const Test = () => {
  return (
    <Box bg="gray.100" w="100%" h="100%" p={4} color="white">
      <Flex mb="8" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading color="gray.700" as="h2" size="xl">
            Courts
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="green">Create new court</Button>
        </ButtonGroup>
      </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <CourtsCard {...courtsCardInfo} />
        <CourtsCard {...courtsCardInfo} />
        <CourtsCard {...courtsCardInfo} />
        <CourtsCard {...courtsCardInfo} />
        <CourtsCard {...courtsCardInfo} />
      </SimpleGrid>
    </Box>
  )
}

export default Test
