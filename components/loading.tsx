import {CircularProgress, Center, Flex, Heading} from '@chakra-ui/react'
import Image from 'next/image'

export const Loading = () => {
  return (
    <Center
      flexDirection='column'
      justifyContent='space-between'
      pb='8'
      w='100%'
      h='100vh'
    >
      <Flex />
      <CircularProgress isIndeterminate color='#fd5b32' />
      <Image alt='Logo Lifesy' width='50' height='50' src='/logo.svg' />
    </Center>
  )
}
