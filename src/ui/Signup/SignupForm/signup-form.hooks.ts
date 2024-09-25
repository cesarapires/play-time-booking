import { Register } from '@/domain/usecases/register'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  SignupFormValidation,
  SignupFormValidationType,
} from '@/ui/Signup/SignupForm/signup-form.validation'

import { UseFormReturn } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import {
  SIGN_UP_ERROR_TOAST_DESCRIPTION,
  SIGN_UP_ERROR_TOAST_TITLE,
} from '@/ui/Signup/SignupForm/signup-form.dictionary'

type UseSignupForm = {
  perform: (formData: SignupFormValidationType) => void;
  form: UseFormReturn<SignupFormValidationType>;
};

export const useRegisterForm = (register: Register): UseSignupForm => {
  const toast = useToast()

  const perform = async (formData: SignupFormValidationType) => {
    try {
      await register.perform(formData)
    } catch (errors) {
      toast({
        title: SIGN_UP_ERROR_TOAST_TITLE,
        description: SIGN_UP_ERROR_TOAST_DESCRIPTION,
        status: 'error',
      })
    }
  }

  const form = useForm<SignupFormValidationType>({
    resolver: zodResolver(SignupFormValidation),
    defaultValues: {
      name: '',
      document: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  return {
    perform,
    form,
  }
}
