import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react'

// makestyle
import { Container, Box, Image, Text, Heading } from '@chakra-ui/react'

const ResponsiveAppBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <Box>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/myaccount">
            <a>My Account</a>
          </Link>
        </li>
      </Box>
    </>
  )
}
export default ResponsiveAppBar
