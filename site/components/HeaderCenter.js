import React from 'react'
import { Container, Box, Center, Flex } from '@chakra-ui/react'
import MenuListComposition from '../components/menu'
import ResponsiveAppBar from '../components/ListPages'

const HeaderCenter = () => {
  return (
    <Container
      maxW={{
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }}
    >
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
