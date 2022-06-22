import React from 'react'
import { Container, Box, Center, Flex, Spacer } from '@chakra-ui/react'
// import images
import paymentImages from '../assets/payment.png'

const Copyright = () => {
  return (
    <Center>
      <Container maxWidth="lg">
        <Flex sx={{ flexGrow: 1 }}>
          <Box item xs={12} sm={6} md={6}>
            Estore - Designed LogoeBay
            <a href="http://netbasejsc.com/">Netbase JSC</a> . Copyright © 2006
            - 2017. All Rights Reserved.
          </Box>
          <Spacer />
          <Box item xs={12} sm={6} md={6}>
            <Box>
              <img src={paymentImages.src} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Center>
  )
}
export default Copyright
