'use client';

import { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { twMerge } from 'tailwind-merge';

export function PrimeProvider({ children }: { children: ReactNode }) {
  return (
    <PrimeReactProvider
      value={{
        unstyled: false,
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
        pt: {
            datatable: {
                
                table: {
                  className: 'min-w-full overflow-hidden',
                },
                thead: {
                  className: 'bg-gray-100 dark:bg-transparent',
                },
                headerRow: {
                  className: 'dark:bg-gray-700 dark:bg-opacity-40 gray-glass border-x border-gray-1',
                },
                header:{
                    className: 'bg-gray-100 dark:bg-gray-700 dark:bg-opacity-40 gray-glass border-t border-x border-gray-1 rounded-t-xl',
                },
                column: {
                  headerCell: {
                    className: `px-6 
                                py-3
                                text-left
                                text-xs
                                font-medium 
                                text-gray-700 
                                uppercase 
                                tracking-wider 
                                dark:text-gray-300 
                                bg-gray-100 
                                dark:bg-transparent
                                `,
                  },
                },
                bodyRow: {
                  className: `bg-white 
                              dark:bg-gray-500
                              hover:bg-gray-50
                              dark:hover:bg-gray-800
                              dark:hover:bg-opacity-40
                              dark:bg-opacity-10
                              border-x
                              border-gray-1
                              py-0
                              border-b
                              dark:text-gray-300
                              `,
                },
                loadingOverlay: {
                  className: ` rounded-xl`
                },
                paginator: {
                  root: {
                    className: 'bg-white p-2 dark:bg-gray-700 dark:bg-opacity-40 gray-glass border-x border-b border-gray-1 rounded-b-xl',
                  },
                  pageButton: {
                    className: 'text-gray-900 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-40 rounded-sm dark:hover:bg-gray-600',
                  },
                }
            },
            splitbutton: {
              root: {
                className: 'dark:bg-gray-800 dark:text-white',
              },
              button: {
                className: 'dark:bg-gray-700 dark:border-gray-600 hover:dark:bg-gray-600',
              },
              menuButton: {
                className: 'dark:bg-gray-700 dark:border-gray-600 hover:dark:bg-gray-600',
                badge: {
                  className: 'dark:bg-red-100',
                },
              },
              menu: {
                className: 'dark:bg-gray-800 dark:border-gray-600',
              },
              menuitem: {
                className: 'dark:hover:bg-gray-700 dark:text-white',
              },
              menubutton: {
                className: 'dark:text-gray-300',
              },
            },
        },
      }}
    >
      {children}
    </PrimeReactProvider>
  );
}
