import { Register } from '@/domain/usecases/register'
import { SignupView } from '@/ui/Signup/Signup.view'

const Signup = (register: Register) => {
  return <SignupView register={register} />
}

export default Signup
