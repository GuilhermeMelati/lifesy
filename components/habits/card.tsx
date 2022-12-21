import {GridItem, Box, Heading, IconButton, Text} from '@chakra-ui/react'
import {IoCheckmarkOutline, IoCloseOutline} from 'react-icons/io5'

export const Card = () => {
  return (
    <GridItem
      rounded='md'
      w='100%'
      h='60'
      bg='gray.100'
      p='4'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      _hover={{
        shadow: 'md',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Heading size='3xl'>🚴</Heading>
        <IconButton
          variant='solid'
          rounded='full'
          aria-label='Done Habit'
          icon={<IoCheckmarkOutline />}
          colorScheme='green'
        />
      </Box>
      <Box p='2'>
        <Heading size='md'>Bicycle</Heading>
        <Text size='xs'>07:00 for 4km</Text>
      </Box>
    </GridItem>
  )
}
