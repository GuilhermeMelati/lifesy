import {Grid, Heading, Box} from '@chakra-ui/react'
import {Card} from './card'

export const Cards = () => {
  return (
    <Box>
      <Heading as='h4' size='md'>
        Tuesday habits - (1/5)
      </Heading>
      <Grid templateColumns='repeat(7, 1fr)' mt='4' mb='4' gap={6}>
        <Card />
      </Grid>
    </Box>
  )
}
