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
      backgroundSize="100% 250px"
    >
      <Container
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
      >
        <Center
          item
          pt="20"
          mb="20"
          display={{ sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' }}
        >
          <Box w={{ sm: '100%', md: '25%', lg: '25%', xl: '25%' }}>
            <Heading color="#323232" fontFamily="Merriweather">
              Subscribe to our newsletter
            </Heading>
          </Box>
          <Box
            w={{ sm: '100%', md: '75%', lg: '75%', xl: '75%' }}
            display={{ sm: 'flex', md: 'block', lg: 'block', xl: 'block' }}
          >
            <form>
              <Input
                id="first-name"
                placeholder="First name"
                height="45px"
                bg="#fff"
                pl="6"
                w={{ sm: '100%', md: '70%', lg: '70%', xl: '70%' }}
              />
              <Button
                type="submit"
                color="#fff"
                w="20%"
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
