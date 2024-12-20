import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  screen,
} from '@testing-library/react'

import { mock, type MockProxy } from 'jest-mock-extended'
import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from '@/ui/Login/LoginForm/login-form'
import { Authentication } from '@/domain/usecases/authentication'
import { mockLoginParams } from '../../../domain/mocks/login'

describe('SignupForm Form ', () => {
  afterEach(cleanup)

  let authenticationUseCase: MockProxy<Authentication>

  beforeEach(() => {
    authenticationUseCase = mock()
  })

  test('Should start with initial state', () => {
    const sut = render(<LoginForm authentication={authenticationUseCase} />)

    const subimitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(subimitButton.disabled).toBe(true)
  })

  test('Should not call register when submit form is invalid', async () => {
    const sut = render(<LoginForm authentication={authenticationUseCase} />)

    fireEvent.blur(sut.container.querySelector('input[name="email"]')!, {
      target: { value: '' },
    })
    fireEvent.blur(sut.container.querySelector('input[name="password"]')!, {
      target: { value: 'test' },
    })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(submitButton.disabled).toBe(true)
      expect(authenticationUseCase.auth).toHaveBeenCalledTimes(0)
      expect(
        screen.getByText('Invalid email'),
      ).toBeInTheDocument()
      expect(
        screen.getByText('String must contain at least 6 character(s)'),
      ).toBeInTheDocument()
    })
  })

  test('Should call register when submit form', async () => {
    const sut = render(<LoginForm authentication={authenticationUseCase} />)

    const { email, password } = mockLoginParams()

    fireEvent.blur(sut.container.querySelector('input[name="email"]')!, {
      target: { value: email },
    })
    fireEvent.blur(sut.container.querySelector('input[name="password"]')!, {
      target: { value: password },
    })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(submitButton.disabled).toBe(false)
      expect(authenticationUseCase.auth).toHaveBeenCalledWith({
        email,
        password,
      })
      expect(authenticationUseCase.auth).toHaveBeenCalledTimes(1)
    })
  })

  test('Should call register when submit form, when register returns error', async () => {
    authenticationUseCase.auth.mockRejectedValue(new Error('Error'))

    const sut = render(
      <ChakraProvider>
        <LoginForm authentication={authenticationUseCase} />
      </ChakraProvider>,
    )

    const { email, password } = mockLoginParams()

    fireEvent.blur(sut.container.querySelector('input[name="email"]')!, {
      target: { value: email },
    })
    fireEvent.blur(sut.container.querySelector('input[name="password"]')!, {
      target: { value: password },
    })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText('Erro ao tentar fazer login'),
      ).toBeInTheDocument()
      expect(screen.getByText('Tente novamente!')).toBeInTheDocument()
    })
  })
})
