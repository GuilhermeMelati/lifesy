import {Box} from '@chakra-ui/react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import {Header, Loading, Footer, Cards} from 'components'
import {Quote} from 'types/quote'

export default function App({quote}: Quote) {
  const {data: session, status} = useSession()
  const router = useRouter()

  if (status === 'loading') return <Loading />
  if (status === 'unauthenticated') router.push('/api/auth/signin')

  if (status === 'authenticated') {
    return (
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        pt='10'
        pb='10'
        pl='10'
        pr='10'
        w='100%'
        h='100vh'
      >
        <Head>
          <title>Lifesy</title>
          <meta name='description' content='Your Habit Manager' />
          <link rel='icon' href='/logo.svg' />
        </Head>
        <Header quote={quote} />
        <Cards />
        <Footer session={session} />
      </Box>
    )
  }
}

export async function getServerSideProps() {
  const res = await fetch('https://zenquotes.io/api/today')
  const json = await res.json()
  const quote = json[0]
  return {
    props: {quote},
  }
}
