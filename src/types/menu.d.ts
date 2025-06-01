import { ReactElement } from 'react'

declare global {
  interface IMenu {
    label: string
    path: string
    icon?: ReactElement
  }
}

export {}
