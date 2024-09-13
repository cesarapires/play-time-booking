import { Authentication } from '@/domain/usecases/authentication'
import {
  LOGIN_FIELD,
  PASSWORD_FIELD,
} from '@/ui/Login/LoginForm/login-form.consts'

type UseLoginForm = {
  onSubmit: (formData: FormData) => void;
};

export const useLoginForm = (authentication: Authentication): UseLoginForm => {

  const onSubmit = async (formData: FormData) => {
    const email = (formData.get(LOGIN_FIELD) as string) || ''
    const password = (formData.get(PASSWORD_FIELD) as string) || ''

    alert(`Email: ${email}, Password: ${password}`)

    try {
      await authentication.auth({ email, password })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    onSubmit,
  }
}
