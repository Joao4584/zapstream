'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useState } from 'react'

import { themes } from '@/src/assets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@/src/components/ui/sonner'
/* 
import { AuthProvider } from '@/hooks/use-auth' */

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={themes}
      enableSystem={false}
    >
      <QueryClientProvider client={queryClient}>
       
          {children}

          <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
