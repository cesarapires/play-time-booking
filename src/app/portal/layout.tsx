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
  const userProfile = {
    name: 'Cesar Augusto Pires',
    role: 'Admin',
    urlPhoto: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  }
  return (
    <Providers>
      <SidebarWithHeader userProfile={userProfile}>{children}</SidebarWithHeader>
    </Providers>
  )
}
