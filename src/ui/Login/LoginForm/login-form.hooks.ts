import { Authentication } from '@/domain/usecases/authentication'
import { useForm, UseFormReturn } from 'react-hook-form'
import {
  LOGIN_FIELD,
  PASSWORD_FIELD,
} from '@/ui/Login/LoginForm/login-form.consts'
import { LoginFormValidation, LoginFormValidationType } from './login-form.validation'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'

type UseLoginForm = {
  onSubmit: (formData: FormData) => void;
  form: UseFormReturn<LoginFormValidationType>;
};

export const useLoginForm = (authentication: Authentication): UseLoginForm => {

  const onSubmit = async (formData: FormData) => {
    const email = (formData.get(LOGIN_FIELD) as string) || ''
    const password = (formData.get(PASSWORD_FIELD) as string) || ''

    try {
      await authentication.auth({ email, password })
    } catch (error) {
      console.error(error)
    }
  }

  const form = useForm<LoginFormValidationType>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      login: '',
      password: '',
    },
    mode: 'onBlur',
  })

  return {
    onSubmit,
    form
  }
}
