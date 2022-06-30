import React from 'react'
import { Container, Box, Center, Flex } from '@chakra-ui/react'
import MenuListComposition from '../components/menu'
import ResponsiveAppBar from '../components/ListPages'

const HeaderCenter = () => {
  return (
    <Container w="1200px" m="12px auto">
      <Flex>
        <Box w="30%">
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
