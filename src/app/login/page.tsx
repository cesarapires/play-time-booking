import { Authentication } from '@/domain/usecases/authentication'
import { LoginView } from '@/ui/Login/Login.view'

const Login = (authentication: Authentication) => {
  return <LoginView authentication={authentication} />
}

export default Login
