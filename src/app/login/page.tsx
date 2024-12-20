'use client'

import { Authentication } from '@/domain/usecases/authentication'
import { makeAuthentication } from '@/main/factories/domain/usecases/makeAuthentication'
import { LoginView } from '@/ui/Login/Login.view'

const Login = () => {
  const authentication: Authentication = makeAuthentication()

  return <LoginView authentication={authentication} />
}

export default Login
