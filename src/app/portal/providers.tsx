'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider toastOptions={{ defaultOptions: { position: 'top-right' } }}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
