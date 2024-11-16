import type { Metadata } from 'next'
import { Providers } from './providers'
import SidebarWithHeader from '@/ui/common/components/sidebar/sidebar'

export const metadata: Metadata = {
  title: 'Play Time Booking',
  description: 'Schedule and manager your complex',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <SidebarWithHeader>{children}</SidebarWithHeader>
    </Providers>
  )
}
