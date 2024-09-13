'use client'

import {
  Flex,
  Box,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import LoginForm from '@/ui/Login/LoginForm/login-form'
import { Authentication } from '@/domain/usecases/authentication'

export const LoginView = (authentication: Authentication) => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <LoginForm authentication={authentication} />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
