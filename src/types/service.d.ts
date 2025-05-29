declare global {
  interface IService {
    id: number
    title: string
    slug: string
    description: string
    icon?: ReactElement
    image?: string
  }
}

export {}
