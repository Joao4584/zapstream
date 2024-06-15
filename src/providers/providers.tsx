'use client'

import { ReactNode, useEffect, useState } from 'react'

import { themes } from '@/src/assets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@/src/components/ui/sonner'
import { ThemeProvider } from './theme-provider'
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


        <Toaster
          position='top-right'
          visibleToasts={3}
          pauseWhenPageIsHidden
          duration={70020}
          toastOptions={{
            closeButton: true,
            classNames: {
              closeButton: "absolute left-80 top-1/2 border-0 close-button",
              icon: "mr-3",
              description: "text-slate-500 text-xs",
              toast: "dark:bg-slate-500 dark:bg-opacity-80 dark:border-gray-500 text-gray-700"
            }
          }}
          gap={10}
        />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
