'use client'

import React, { InputHTMLAttributes } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  formHelperText?: string;
  error?: string;
  isRequired?: boolean;
  register?: UseFormRegisterReturn;
  isCpf?: boolean;
}

const Field: React.FC<FieldProps> = (fields) => {
  const { label, error, name, isRequired, register } = fields

  const isError = error !== undefined
  const margin = error ? '0px' : '24px'

  return (
    <FormControl isInvalid={isError} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        name={name}
        mb={margin}
        {...register}
      />
      { error && <FormErrorMessage>{error}</FormErrorMessage> }
    </FormControl>
  )
}

export default Field
