import React from 'react'
import { Container, Box, Center, Flex, Spacer, Image } from '@chakra-ui/react'
// import images
import paymentImages from '../assets/payment.png'

const Copyright = () => {
  return (
    <Box borderTop="1px solid #ccc">
      <Container
        maxW={{
          sm: '320px',
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
        m="12px auto"
        color="brand.detail"
      >
        <Flex sx={{ flexGrow: 1 }}>
          <Box item xs={12} sm={6} md={6}>
            Estore - Designed LogoeBay
            <a href="http://netbasejsc.com/">Netbase JSC</a> . Copyright © 2006
            - 2017. All Rights Reserved.
          </Box>
          <Spacer />
          <Box item xs={12} sm={6} md={6}>
            <Box>
              <Image src={paymentImages.src} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default Copyright
