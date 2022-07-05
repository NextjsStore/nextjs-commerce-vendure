import React from 'react'
import { Container, Box, Center, Flex } from '@chakra-ui/react'
import MenuListComposition from '../components/menu'
import ResponsiveAppBar from '../components/ListPages'

const HeaderCenter = () => {
  return (
    <Container maxW="1200px">
      <Flex>
        <Box w="30%" pt="2">
          <MenuListComposition />
        </Box>
        <Box w="70%">
          <ResponsiveAppBar />
        </Box>
      </Flex>
    </Container>
  )
}
export default HeaderCenter
