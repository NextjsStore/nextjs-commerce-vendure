import React from 'react'
import { Container, Box, Flex, Select } from '@chakra-ui/react'
import { MdOutlineLanguage } from 'react-icons/md'

const SideBarTop = () => {
  return (
    <Box bg="brand.background">
      <Container
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
      >
        <Flex display="flex">
          <Box
            w="50%"
            color="brand.text"
            display={{ sm: 'none', md: 'flex' }}
            p="10px 0"
          >
            <Box>Call Support Free:1800123456</Box>
          </Box>
          <Box w={{ sm: '100%', md: '50%' }}>
            <Flex
              display="flex"
              justifyContent={{ sm: 'center', md: 'flex-end' }}
              alignContent="center"
              flexWrap="wrap"
            >
              <Box>
                <Select border="none" bg="brand.background" color="brand.text">
                  <option value="option1">USD, $</option>
                  <option value="option2">EUR, €</option>
                </Select>
              </Box>
              <Box display="flex" alignItems="center">
                <Box
                  ml="10px"
                  color="brand.text"
                  borderLeft="1px solid #ccc"
                  pl="5px"
                >
                  <MdOutlineLanguage color="brand.text" />
                </Box>
                <Select border="none" bg="brand.background" color="brand.text">
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
