import React from 'react'
// import images
import {
  Container,
  Center,
  Heading,
  Box,
  Input,
  Button,
} from '@chakra-ui/react'

export default function NameForm() {
  return (
    <Container maxWidth="lg" container spacing={2}>
      <Box
        p={4}
        w="100%"
        color="#666"
        backgroundImage="assets/bg-home1-newleter.jpg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
        centerContent
        borderRadius="10"
      >
        <Center item lg={3} md={4} pt="80" mb="80">
          <Box>
            <Heading
              as="h3"
              size="2xl"
              noOfLines={1}
              align="center"
              color="#323232"
            >
              Subscribe to our newsletter
            </Heading>
          </Box>
          <form>
            <Input id="first-name" placeholder="First name" />
            <Button type="submit" color="primary">
              Subscribe
            </Button>
          </form>
        </Center>
      </Box>
    </Container>
  )
}
