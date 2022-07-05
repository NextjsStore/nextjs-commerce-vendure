import React from 'react'
import {
  Container,
  Center,
  Heading,
  Box,
  Input,
  Button,
  StylesProvider,
} from '@chakra-ui/react'

const NameForm = () => {
  return (
    <Box
      p={4}
      w="100%"
      color="brand.detail"
      backgroundImage="assets/bg-home1-newleter.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      borderRadius="10"
    >
      <Container maxW="1200px">
        <Center item lg={3} md={4} pt="40" mb="40">
          <Box w="25%">
            <Heading color="#323232" fontFamily="Merriweather">
              Subscribe to our newsletter
            </Heading>
          </Box>
          <Box w="75%">
            <form>
              <Input
                id="first-name"
                placeholder="First name"
                height="45px"
                bg="#fff"
                pl="30px"
                mr="50px"
                w="70%"
              />
              <Button
                type="submit"
                color="#fff"
                width="20%"
                bg="brand.primary"
                borderRadius="24px"
              >
                Subscribe
              </Button>
            </form>
          </Box>
        </Center>
      </Container>
    </Box>
  )
}

export default NameForm
