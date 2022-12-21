import {SignOut} from './signout'
import {User} from './user'
import {Center} from '@chakra-ui/react'
import {Session} from 'types/session'

export const Footer = ({session}: Session) => {
  return (
    <Center justifyContent='space-between' w='100%' alignItems='center'>
      <SignOut />
      <User session={session} />
    </Center>
  )
}
