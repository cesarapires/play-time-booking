import { z } from 'zod'

import {
  LOGIN_FIELD,
  PASSWORD_FIELD,
} from '@/ui/Login/LoginForm/login-form.consts'

export const LoginFormValidation = z.object({
  [LOGIN_FIELD]: z.string().email(),
  [PASSWORD_FIELD]: z.string().min(6),
})

export type LoginFormValidationType = z.infer<typeof LoginFormValidation>
