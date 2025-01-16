'use client'

import { makeRegister } from '@/main/factories/domain/usecases/makeRegister'
import { SignupView } from '@/ui/Signup/Signup.view'

const Signup = () => {
  const register = makeRegister()

  return <SignupView register={register} />
}

export default Signup
