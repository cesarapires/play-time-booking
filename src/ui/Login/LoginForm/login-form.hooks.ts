import { Authentication } from '@/domain/usecases/authentication'
import { useForm, UseFormReturn } from 'react-hook-form'
import { LoginFormValidation, LoginFormValidationType } from '@/ui/Login/LoginForm/login-form.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@chakra-ui/react'
import { LOGIN_ERROR_TOAST_DESCRIPTION, LOGIN_ERROR_TOAST_TITLE } from '@/ui/Login/LoginForm/login-form.dictionary'

type UseLoginForm = {
  perform: (formData: LoginFormValidationType) => void;
  form: UseFormReturn<LoginFormValidationType>;
};

export const useLoginForm = (authentication: Authentication): UseLoginForm => {
  const toast = useToast()

  const perform = async (formData: LoginFormValidationType) => {
    try {
      await authentication.auth(formData)
    } catch (error) {
      toast({
        title: LOGIN_ERROR_TOAST_TITLE,
        description: LOGIN_ERROR_TOAST_DESCRIPTION,
        status: 'error',
      })
    }
  }

  const form = useForm<LoginFormValidationType>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  return {
    perform,
    form
  }
}
