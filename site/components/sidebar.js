import React from 'react'
import { Container, Box, Flex, Select } from '@chakra-ui/react'
import { MdOutlineLanguage } from 'react-icons/md'

const SideBarTop = () => {
  return (
    <Box bg="rgb(243,243,243)">
      <Container maxW="1200px">
        <Flex display="flex">
          <Box w="50%" color="rgb(153,153,153)" display="flex" p="10px 0">
            <Box>Call Support Free:1800123456</Box>
          </Box>
          <Box w="50%">
            <Flex
              display="flex"
              justifyContent="flex-end"
              alignContent="center"
              flexWrap="wrap"
            >
              <Box>
                <Select
                  border="none"
                  bg="rgb(243,243,243)"
                  color="rgb(153,153,153)"
                >
                  <option value="option1">USD, $</option>
                  <option value="option2">EUR, €</option>
                </Select>
              </Box>
              <Box display="flex" alignItems="center">
                <Box
                  ml="10px"
                  color="rgb(153,153,153)"
                  borderLeft="1px solid #ccc"
                  pl="5px"
                >
                  <MdOutlineLanguage color="rgb(153,153,153)" />
                </Box>
                <Select
                  border="none"
                  bg="rgb(243,243,243)"
                  color="rgb(153,153,153)"
                >
                  <option value="">English</option>
                  <option value="">Viet Nam</option>
                </Select>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default SideBarTop

const styles = {
  select: {},
  right: {
    align: 'right',
  },
}
