import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react'
// makestyle
import { Container, Box, Flex } from '@chakra-ui/react'

const ListPages = () => {
  return (
    <Container>
      <Flex
        color="#666"
        m="20px"
        fontSize="16px"
        fonts=" Mulish,sans-serif"
        textTransform=" uppercase"
      >
        <Box pl="100">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Box>
        <Box pl="40">
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </Box>
        <Box pl="40">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Box>
        <Box pl="40">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Box>
        <Box pl="40">
          <Link href="/myaccount">
            <a>My Account</a>
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}
export default ListPages
