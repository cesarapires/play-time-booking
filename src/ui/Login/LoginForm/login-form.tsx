'use client'

import React from 'react'

import {
  Checkbox,
  Stack,
  Button,
  Text,
  Link,
} from '@chakra-ui/react'
import { useLoginForm } from '@/ui/Login/LoginForm/login-form.hooks'
import {
  DONT_HAVE_AN_USER_LINK,
  DONT_HAVE_AN_USER_TEXT,
  FIELD_EMAIL_LABEL,
  FIELD_PASSWORD_LABEL,
  FORGOT_PASSWORD_TEXT_LINK,
  REMEMBER_ME_CHECKBOX_LABEL,
  SIGN_IN_BUTTON_LABEL,
} from '@/ui/Login/LoginForm/login-form.dictionary'
import { LOGIN_FIELD, PASSWORD_FIELD } from './login-form.consts'
import { Authentication } from '@/domain/usecases/authentication'
import Field from '@/ui/common/components/fields/Field/Field'
import Password from '@/ui/common/components/fields/Password/Password'

interface LoginFormProps {
  authentication: Authentication;
}

export default function LoginForm({ authentication }: LoginFormProps) {
  const { perform, form } = useLoginForm(authentication)

  return (
    <form onSubmit={form.handleSubmit(perform)}>
      <Field
        label={FIELD_EMAIL_LABEL}
        error={form.formState.errors[LOGIN_FIELD]?.message}
        register={form.register(LOGIN_FIELD)}
        isRequired
      />

      <Password
        label={FIELD_PASSWORD_LABEL}
        error={form.formState.errors[PASSWORD_FIELD]?.message}
        register={form.register(PASSWORD_FIELD)}
        isRequired
      />

      <Stack spacing={10}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}
        >
          <Checkbox>{REMEMBER_ME_CHECKBOX_LABEL}</Checkbox>
          <Text color={'blue.400'}>{FORGOT_PASSWORD_TEXT_LINK}</Text>
        </Stack>
        <Button
          data-testid="submit"
          isDisabled={!form.formState.isValid}
          type="submit"
          bg={'blue.400'}
          color={'white'}
          _hover={{ bg: 'blue.500' }}
        >
          {SIGN_IN_BUTTON_LABEL}
        </Button>
        <Stack>
          <Text align={'center'}>
            {DONT_HAVE_AN_USER_TEXT}{' '}
            <Link href="signup" color={'blue.400'}>
              {DONT_HAVE_AN_USER_LINK}
            </Link>
          </Text>
        </Stack>
      </Stack>
    </form>
  )
}
