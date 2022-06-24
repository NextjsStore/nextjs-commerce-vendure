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
    <Container maxWidth="lg" spacing={2}>
      <Box
        p={4}
        w="100%"
        color="#666"
        backgroundImage="assets/bg-home1-newleter.jpg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
        borderRadius="10"
      >
        <Container w="1200px" m="12px auto">
          <Center item lg={3} md={4} pt="80" mb="80">
            <Box w="25%">
              <Heading
                color="#323232"
                fontSize="30px"
                fontFamily="Merriweather,sans-serif"
                fontWeight="700"
                lineHeight="35px"
              >
                Subscribe to our newsletter
              </Heading>
            </Box>
            <Box w="75%">
              <form>
                <Input
                  id="first-name"
                  placeholder="First name"
                  style={styles.input}
                  w="70%"
                />
                <Button type="submit" w="30%" style={styles.button}>
                  Subscribe
                </Button>
              </form>
            </Box>
          </Center>
        </Container>
      </Box>
    </Container>
  )
}

export default NameForm
const styles = {
  input: {
    border: 'none',
    height: '45px',
    paddingLeft: '30px',
    borderRadius: '0',
    marginRight: '50px',
  },
  button: {
    background: '#38acdd',
    color: '#fff',
    width: '20%',
    border: 'none',
    height: '45px',
    background: ' #59ccfc',
    borderRadius: '24px',
  },
}
