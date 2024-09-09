import { AbsoluteCenter, Box, Button, Card, CardBody, CardHeader, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, StackDivider, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <Container height='100vh'>
      <Box>
        <AbsoluteCenter axis='both'>
          <Card>
            <CardHeader>
              <Heading size='lg'>Login</Heading>
            </CardHeader>

            <CardBody w='325px'>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>

                  <FormControl>
                    <FormLabel mb='0'>Email</FormLabel>
                    <Input type='email' />
                  </FormControl>

                  <FormControl mt='4'>
                    <Flex justify='space-between'>
                      <FormLabel mb='0'>Password</FormLabel>
                      <Text mt='1' fontSize='sm' color='gray.500'>Esqueci minha senha!</Text>
                    </Flex>
                    <Input type='password' />
                  </FormControl>

                  <Button maxBlockSize='true' colorScheme='teal' mt='8' width='285px'>Login</Button>

                  <Flex mt='8'justify='center'>
                    <Text>Cadastra-se</Text>
                  </Flex>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </AbsoluteCenter>
      </Box>
    </Container>
  )
}
