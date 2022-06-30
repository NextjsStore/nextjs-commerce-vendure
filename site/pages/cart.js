// import CartItemsContainer from '../components/cart/Cart-Page/CartItemsContainer'
import CartItemsContainer from '../components/cart/cart-page/CartItemsContainer'
import { AppProvider } from '../lib/context/AppContext'
import { Flex, Heading, Spacer, Box, Container, Center } from '@chakra-ui/react'

const Cart = (props) => {
  return (
    <AppProvider>
      <Box h="240px">
        <Box>
          <Box
            color="#fff"
            backgroundImage="/assets/banner_page.png"
            h="200px"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            mb="60px"
          >
            <Flex>
              <Box>
                <Heading component="h3" variant="h3">
                  About
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading component="h6" variant="h6">
                  About
                </Heading>
                <Heading component="h6" variant="h6">
                  My account
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Center>
        <Container>
          <CartItemsContainer />
          {props.children}
        </Container>
      </Center>
    </AppProvider>
  )
}

export default Cart
