import { Dispatch, SetStateAction } from 'react'

declare global {
  interface AppState {
    isDark: boolean
    setIsDark: Dispatch<SetStateAction<boolean>>
  }
}

export {}
