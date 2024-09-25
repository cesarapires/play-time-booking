'use client'

import React from 'react'

import { Stack, Button, Text, Link } from '@chakra-ui/react'

import { useRegisterForm } from '@/ui/Signup/SignupForm/signup-form.hooks'
import { Register } from '@/domain/usecases/register'
import {
  DOCUMENT_FIELD,
  EMAIL_FIELD,
  NAME_FIELD,
  PASSWORD_FIELD,
} from '@/ui/Signup/SignupForm/signup-form.consts'
import {
  ALREADY_USER_LINK,
  ALREADY_USER_TEXT,
  FIELD_DOCUMENT_LABEL,
  FIELD_EMAIL_LABEL,
  FIELD_NAME_LABEL,
  FIELD_PASSWORD_LABEL,
  SIGN_UP_BUTTON_LABEL,
} from '@/ui/Signup/SignupForm/signup-form.dictionary'
import Field from '@/ui/common/components/fields/Field/Field'
import Password from '@/ui/common/components/fields/Password/Password'

interface SignupFormProps {
  register: Register;
}

export default function SignupForm({ register }: SignupFormProps) {

  const { perform, form } = useRegisterForm(register)

  return (
    <form onSubmit={form.handleSubmit(perform)}>
      <Field
        label={FIELD_NAME_LABEL}
        error={form.formState.errors[NAME_FIELD]?.message}
        register={ form.register(NAME_FIELD) }
        isRequired
      />

      <Field
        label={FIELD_DOCUMENT_LABEL}
        error={form.formState.errors[DOCUMENT_FIELD]?.message}
        register={ form.register(DOCUMENT_FIELD) }
        isCpf
        isRequired
      />

      <Field
        label={FIELD_EMAIL_LABEL}
        error={form.formState.errors[EMAIL_FIELD]?.message}
        register={ form.register(EMAIL_FIELD) }
        isRequired
      />

      <Password
        label={FIELD_PASSWORD_LABEL}
        error={form.formState.errors[PASSWORD_FIELD]?.message}
        register={ form.register(PASSWORD_FIELD) }
        isRequired
      />

      <Stack spacing={10}>
        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'} />
        <Button
          isDisabled={!form.formState.isValid}
          type='submit'
          bg={'blue.400'}
          color={'white'}
          _hover={{ bg: 'blue.500' }}
        >
          {SIGN_UP_BUTTON_LABEL}
        </Button>
        <Stack>
          <Text align={'center'}>
            {ALREADY_USER_TEXT}{' '}
            <Link href='login' color={'blue.400'}>{ALREADY_USER_LINK}</Link>
          </Text>
        </Stack>
      </Stack>
    </form>
  )
}
