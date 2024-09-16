'use client'

import React from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react'
import { useLoginForm } from '@/ui/Login/LoginForm/login-form.hooks'
import {
  FIELD_EMAIL_LABEL,
  FIELD_PASSWORD_LABEL,
  FORGOT_PASSWORD_TEXT_LINK,
  REMEMBER_ME_CHECKBOX_LABEL,
  SIGN_IN_BUTTON_LABEL,
} from '@/ui/Login/LoginForm/login-form.dictionary'
import { LOGIN_FIELD, PASSWORD_FIELD } from './login-form.consts'
import { Authentication } from '@/domain/usecases/authentication'

interface LoginFormProps {
  authentication: Authentication;
}

export default function LoginForm({authentication}: LoginFormProps) {
  const { onSubmit } = useLoginForm(authentication)

  return (
    <form action={onSubmit}>
      <FormControl id={LOGIN_FIELD}>
        <FormLabel>{FIELD_EMAIL_LABEL}</FormLabel>
        <Input type={LOGIN_FIELD} name={LOGIN_FIELD} />
      </FormControl>
      <FormControl id={PASSWORD_FIELD}>
        <FormLabel>{FIELD_PASSWORD_LABEL}</FormLabel>
        <Input type={PASSWORD_FIELD} name={PASSWORD_FIELD} />
      </FormControl>
      <Stack spacing={10}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}
        >
          <Checkbox>{REMEMBER_ME_CHECKBOX_LABEL}</Checkbox>
          <Text color={'blue.400'}>{FORGOT_PASSWORD_TEXT_LINK}</Text>
        </Stack>
        <Button type='submit' bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
          {SIGN_IN_BUTTON_LABEL}
        </Button>
      </Stack>
    </form>
  )
}
