import { Authentication } from '@/domain/usecases/authentication'
import { useForm, UseFormReturn } from 'react-hook-form'
import { LoginFormValidation, LoginFormValidationType } from './login-form.validation'
import { zodResolver } from '@hookform/resolvers/zod'

type UseLoginForm = {
  perform: (formData: LoginFormValidationType) => void;
  form: UseFormReturn<LoginFormValidationType>;
};

export const useLoginForm = (authentication: Authentication): UseLoginForm => {

  const perform = async (formData: LoginFormValidationType) => {
    try {
      await authentication.auth(formData)
    } catch (error) {
      console.error(error)
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
