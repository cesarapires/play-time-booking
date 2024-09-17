import { Register } from '@/domain/usecases/register'
import {
  EMAIL_FIELD,
  DOCUMENT_FIELD,
  NAME_FIELD,
  PASSWORD_FIELD
} from '@/ui/Signup/SignupForm/signup-form.consts'

type UseSignupForm = {
  onSubmit: (formData: FormData) => void;
};

export const useRegisterForm = (register: Register): UseSignupForm => {

  const onSubmit = async (formData: FormData) => {
    const email = (formData.get(EMAIL_FIELD) as string) || ''
    const name = (formData.get(NAME_FIELD) as string) || ''
    const document = (formData.get(DOCUMENT_FIELD) as string) || ''
    const password = (formData.get(PASSWORD_FIELD) as string) || ''

    alert(`Email: ${email}, Name: ${name}, Documento: ${document}, Password: ${password}`)

    try {
      await register.perform({ email, name, document, password })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    onSubmit,
  }
}
