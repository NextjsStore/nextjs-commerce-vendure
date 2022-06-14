import React from 'react'
import { Container, Box, Center, Flex } from '@chakra-ui/react'
import MenuListComposition from '../components/menu'
import ResponsiveAppBar from '../components/menuPhu'

// import banerHome
import bannerHome from '../assets/bannerHome.png'

const HeaderCenter = () => {
  return (
    <>
      <Center>
        <Container w="90%">
          <Flex>
            <Box>
              <MenuListComposition />
            </Box>
            <Box>
              <ResponsiveAppBar />
            </Box>
          </Flex>
        </Container>
      </Center>
    </>
  )
}
export default HeaderCenter
