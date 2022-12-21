import {Avatar, Badge, Box, Text} from '@chakra-ui/react'
import {IoSkullOutline} from 'react-icons/io5'
import {Session} from 'types/session'

export const User = ({session}: Session) => {
  return (
    <Box display='flex' alignItems='center'>
      <Avatar
        bg='#fd5b32'
        icon={<IoSkullOutline fontSize='1.5rem' />}
        src={session.user.image}
      />
      <Box ml='4'>
        <Text fontWeight='bold'>
          {session.user.name}
          <Badge ml='2' colorScheme={session.user.premium ? 'purple' : 'green'}>
            {session.user.premium ? 'Premium' : 'Free'}
          </Badge>
        </Text>
        <Text fontSize='sm'>{session.user.email}</Text>
      </Box>
    </Box>
  )
}
