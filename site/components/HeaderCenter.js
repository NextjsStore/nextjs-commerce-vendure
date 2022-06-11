import React from 'react'
import { Center, Container, Box, Flex, Button, Spacer } from '@chakra-ui/react'
import MenuListComposition from '../components/menu'
import ResponsiveAppBar from '../components/menuPhu'

// import banerHome
import bannerHome from '/assets/bannerHome.png'

const HeaderCenter = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Flex container direction="row" lg={12}>
          <Box w="30%">
            <MenuListComposition />
          </Box>
          <Spacer />
          <Box w="70%">
            <ResponsiveAppBar />
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default HeaderCenter
