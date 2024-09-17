'use client'

import React, { useState } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
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

interface SignupFormProps {
  register: Register;
}

export default function SignupForm({ register }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { onSubmit } = useRegisterForm(register)

  return (
    <form action={onSubmit}>
      <FormControl id={NAME_FIELD} isRequired>
        <FormLabel>{FIELD_NAME_LABEL}</FormLabel>
        <Input type="text" name={NAME_FIELD} />
      </FormControl>
      <FormControl id={DOCUMENT_FIELD} isRequired>
        <FormLabel>{FIELD_DOCUMENT_LABEL}</FormLabel>
        <Input name={DOCUMENT_FIELD} />
      </FormControl>
      <FormControl id={EMAIL_FIELD} isRequired>
        <FormLabel>{FIELD_EMAIL_LABEL}</FormLabel>
        <Input type="email" name={EMAIL_FIELD} />
      </FormControl>
      <FormControl id={PASSWORD_FIELD} isRequired>
        <FormLabel>{FIELD_PASSWORD_LABEL}</FormLabel>
        <InputGroup>
          <Input type={showPassword ? 'text' : 'password'} name={PASSWORD_FIELD} />
          <InputRightElement h={'full'}>
            <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Stack spacing={10}>
        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'} />
        <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
          {SIGN_UP_BUTTON_LABEL}
        </Button>
        <Stack>
          <Text align={'center'}>
            {ALREADY_USER_TEXT} <Link href='login' color={'blue.400'}>{ALREADY_USER_LINK}</Link>
          </Text>
        </Stack>
      </Stack>
    </form>
  )
}
