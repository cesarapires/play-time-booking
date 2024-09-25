'use client';

import React, { InputHTMLAttributes, useState } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  formHelperText?: string;
  error?: string;
  isRequired?: boolean;
  register?: UseFormRegisterReturn;
}

const Password: React.FC<FieldProps> = (fields) => {
  const { label, error, name, isRequired, register } = fields;

  const [showPassword, setShowPassword] = useState(false);

  const isError = error !== undefined;
  const margin = error ? '0px' : '24px';

  return (
    <FormControl isInvalid={isError} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={showPassword ? 'text' : 'password'}
          name={name}
          mb={margin}
          {...register}
        />
        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            mb={margin}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default Password;
