import { Hello } from '@/components/hello'
import Head from 'next/head'

const HelloPage = () => {
  return (
    <>
      <Head>
        <title>Next.Js Digital Agency Template</title>
        <meta name="description" content="-" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hello />
    </>
  )
}

export default HelloPage
