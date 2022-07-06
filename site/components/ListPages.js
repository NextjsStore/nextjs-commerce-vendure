import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react'
// makestyle
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { BsList } from 'react-icons/bs'

const ListPages = () => {
  return (
    <Box>
      <Box
        color="brand.detail"
        m="20px 0"
        fonts=" Mulish,sans-serif"
        textTransform=" uppercase"
        display={{ sm: 'none', md: 'flex' }}
      >
        <Box>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Box>
        <Box pl="30">
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </Box>
        <Box pl="30">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Box>
        <Box pl="30">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Box>
        <Box pl="30">
          <Link href="/myaccount">
            <a>My Account</a>
          </Link>
        </Box>
      </Box>
      <Box display={{ sm: 'block', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BsList />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem href="/shop">
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">
                <a>About</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/myaccount">
                <a>My Account</a>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}
export default ListPages
