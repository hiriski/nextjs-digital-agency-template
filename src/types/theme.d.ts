import { ThemeConfig } from '@/configs/theme.config'

declare global {
  type IThemeConfig = typeof ThemeConfig
}

export {}
