'use client'

import { Flex, Box, Stack, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import SignupForm from '@/ui/Signup/SignupForm/signup-form'

import { Register } from '@/domain/usecases/register'
import { SIGN_UP_SUB_TITLE_TEXT, SIGN_UP_TITLE_TEXT } from '@/ui/Signup/signup-view.dictionary'

interface SignupViewProps {
  register: Register;
}

export const SignupView: React.FC<SignupViewProps> = ({ register }) => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack minW={400.02} align={'center'}>
          <Heading fontSize={'4xl'}>{SIGN_UP_TITLE_TEXT}</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>{SIGN_UP_SUB_TITLE_TEXT}</Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <SignupForm register={register} />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
