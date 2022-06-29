import React from 'react'
import { Container, Box, Grid, Flex, Spacer, Select } from '@chakra-ui/react'
import { MdOutlineLanguage } from 'react-icons/md'

const SideBarTop = () => {
  return (
    <Container w="1200px" m="0px auto">
      <Flex
        display="flex"
        flexDirection="row-reverse"
        justifyContent="center"
        alignContent="center"
        flexWrap="nowrap"
      >
        <Box maxW="40%">
          <Flex>
            <select style={styles.select}>
              <option value="option1">USD, $</option>
              <option value="option2">EUR, €</option>
            </select>
            <Box
              ml="10px"
              color="rgb(153,153,153)"
              borderLeft="1px solid rgb(153,153,153)"
              pl="5px"
            >
              <MdOutlineLanguage color="rgb(153,153,153)" />
            </Box>
            <select style={styles.select}>
              <option value="">English</option>
              <option value="">Viet Nam</option>
            </select>
          </Flex>
        </Box>
        <Box w="60%" alignItems="flex-start">
          <Box>Call Support Free:1800123456</Box>
        </Box>
      </Flex>
    </Container>
  )
}
export default SideBarTop

const styles = {
  select: {
    border: 'none',
    background: 'rgb(243,243,243)',
    color: 'rgb(153,153,153)',
  },
  right: {
    align: 'right',
  },
}
