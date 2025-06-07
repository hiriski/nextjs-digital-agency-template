'use client'

import React, { FC, ReactNode, useState, createContext } from 'react'

// import Cookie from 'js-cookie'

// constants
// import { PREFERRED_MODE_KEY } from '@/constants'

// context
export const AppContext = createContext<AppState>({} as AppState)

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // const storageConfig =
  //   typeof window !== 'undefined'
  //     ? window.localStorage.getItem(PREFERRED_MODE_KEY)
  //     : 'light'

  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  )
}
