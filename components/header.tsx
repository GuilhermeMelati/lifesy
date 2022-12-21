import {Box, Center, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import {Quote} from 'types/quote'

export const Header = ({quote}: Quote) => {
  return (
    <Center justifyContent='space-between' w='100%' alignItems='center'>
      <Box display='flex'>
        <Image alt='Logo Lifesy' width='50' height='50' src='/logo.svg' />
        <Heading ml='4'>Lifesy</Heading>
      </Box>
      <Box display='flex' flexDirection='column'>
        <Text as='cite'>{quote.q}</Text>
        <Text as='b' align='right'>
          {quote.a}
        </Text>
      </Box>
    </Center>
  )
}
