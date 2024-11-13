import { Register } from '@/domain/usecases/register'
import SignupForm from '@/ui/Signup/SignupForm/signup-form'
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  screen,
} from '@testing-library/react'

import { mock, type MockProxy } from 'jest-mock-extended'
import { mockAddAccountParams } from '../../../domain/mocks/signup'
import { ChakraProvider } from '@chakra-ui/react'

describe('SignupForm Form ', () => {
  afterEach(cleanup)

  let registerUseCase: MockProxy<Register>

  beforeEach(() => {
    registerUseCase = mock()
  })

  test('Should start with initial state', () => {
    const sut = render(<SignupForm register={registerUseCase} />)

    const subimitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(subimitButton.disabled).toBe(true)
  })

  test('Should not call register when submit form is invalid', async () => {
    const sut = render(<SignupForm register={registerUseCase} />)

    fireEvent.blur(sut.container.querySelector('input[name="name"]')!, {
      target: { value: 'aa' },
    })
    fireEvent.blur(sut.container.querySelector('input[name="email"]')!, {
      target: { value: '' },
    })
    fireEvent.blur(sut.container.querySelector('input[name="document"]')!, {
      target: { value: '123' },
    })
    fireEvent.blur(sut.container.querySelector('input[name="password"]')!, {
      target: { value: 'test' },
    })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(submitButton.disabled).toBe(true)
      expect(registerUseCase.perform).toHaveBeenCalledTimes(0)
      expect(
        screen.getByText('String must contain at least 3 character(s)'),
      ).toBeInTheDocument()
      expect(
        screen.getByText('String must contain exactly 11 character(s)'),
      ).toBeInTheDocument()
      expect(
        screen.getByText('Invalid email'),
      ).toBeInTheDocument()
      expect(
        screen.getByText('String must contain at least 6 character(s)'),
      ).toBeInTheDocument()
    })
  })

  test('Should call register when submit form', async () => {
    const sut = render(<SignupForm register={registerUseCase} />)

    const { name, email, document, password } = mockAddAccountParams()

    fireEvent.blur(sut.container.querySelector('input[name="name"]')!, {
      target: { value: name },
    })
    fireEvent.blur(sut.container.querySelector('input[name="email"]')!, {
      target: { value: email },
    })
    fireEvent.blur(sut.container.querySelector('input[name="document"]')!, {
      target: { value: document },
    })
    fireEvent.blur(sut.container.querySelector('input[name="password"]')!, {
      target: { value: password },
    })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(submitButton.disabled).toBe(false)
      expect(registerUseCase.perform).toHaveBeenCalledWith({
        name,
        email,
        document,
        password,
      })
      expect(registerUseCase.perform).toHaveBeenCalledTimes(1)
    })
  })

  test('Should call register when submit form, when register returns error', async () => {
    registerUseCase.perform.mockRejectedValue(new Error('Error'))

    const sut = render(
      <ChakraProvider>
        <SignupForm register={registerUseCase} />
      </ChakraProvider>,
    )

    const { name, email, document, password } = mockAddAccountParams()

    fireEvent.blur(sut.container.querySelector('input[name="name"]')!, {
      target: { value: name },
    })
    fireEvent.blur(sut.container.querySelector('input[name="email"]')!, {
      target: { value: email },
    })
    fireEvent.blur(sut.container.querySelector('input[name="document"]')!, {
      target: { value: document },
    })
    fireEvent.blur(sut.container.querySelector('input[name="password"]')!, {
      target: { value: password },
    })

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement

    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText('Error while performing sign up'),
      ).toBeInTheDocument()
      expect(screen.getByText('Try again!')).toBeInTheDocument()
    })
  })
})
