import { Card, CardBody, CardHeader, Heading, Image, Text } from '@chakra-ui/react'

type CourtsCardInfo = {
    name: string;
    urlImage: string;
    price: string;
}

export default function CourtsCard(courtsCardInfo: CourtsCardInfo) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={courtsCardInfo.urlImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
      </CardHeader>
      <CardBody>
        <Heading size="md">{courtsCardInfo.name}</Heading>
        <Text color="gray.500">{courtsCardInfo.price}</Text>
      </CardBody>
    </Card>
  )
}
