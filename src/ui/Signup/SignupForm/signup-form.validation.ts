import { z } from 'zod'

import {
  EMAIL_FIELD,
  NAME_FIELD,
  DOCUMENT_FIELD,
  PASSWORD_FIELD,
} from '@/ui/Signup/SignupForm/signup-form.consts'

export const SignupFormValidation = z.object({
  [NAME_FIELD]: z.string().min(3),
  [DOCUMENT_FIELD]: z.string().length(11),
  [EMAIL_FIELD]: z.string().email(),
  [PASSWORD_FIELD]: z.string().min(6),
})

export type SignupFormValidationType = z.infer<typeof SignupFormValidation>
