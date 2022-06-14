import React from 'react'
import {
  Container,
  Box,
  Grid,
  Flex,
  Spacer,
  Center,
  Select,
} from '@chakra-ui/react'
import { GoGlobe } from 'react-icons/go'
import Link from 'next/link'

const SideBarTop = () => {
  return (
    <Container bg="rgb(243,243,243)" p="10" color="rgb(153,153,153)">
      <Flex>
        <Box w="50%">
          <Grid>
            <Box>Call Support Free:1800123456</Box>
          </Grid>
        </Box>
        <Spacer />
        <Box w="50%">
          <Flex>
            <Select bg="rgb(243,243,243)" borderColor="rgb(243,243,243)">
              <option value="option1">USD, $</option>
              <option value="option2">EUR, €</option>
            </Select>
            <Box>
              <GoGlobe />
            </Box>
            <Select bg="rgb(243,243,243)" borderColor="rgb(243,243,243)">
              <option value="">English</option>
              <option value="">Viet Nam</option>
            </Select>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}
export default SideBarTop
