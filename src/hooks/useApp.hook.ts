'use client'

import { useContext } from 'react'

// context
import { AppContext } from '@/contexts/app.context'

export const useApp = (): AppState => {
  const appState = useContext<AppState>(AppContext)
  return appState
}
