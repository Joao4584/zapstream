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
          duration={3600}
          toastOptions={{
            closeButton: true,
            classNames: {
              closeButton: "absolute left-80 top-1/2 border-0 close-button dark:hover:opacity-20",
              icon: "mr-4 ml-1",
              description: "text-slate-500 text-xs",
              toast: `
                dark:bg-gray-800
                dark:bg-opacity-60
                dark:backdrop-blur-sm
                dark:border-gray-700
                dark:text-gray-400
                text-gray-700
                
              `
            }
          }}
          gap={10}
        />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
