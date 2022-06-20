import CartItemsContainer from '../components/cart/Cart-Page/CartItemsContainer'
import { AppProvider } from '../lib/context/AppContext'
import Banner from '../assets/banner_page.png'
import {
  Container,
  Box,
  Grid,
  Text,
  Spacer,
  Heading,
  Flex,
} from '@chakra-ui/react'

const styles = {
  page: {
    marginBottom: '60px',
    minHeight: '200px',
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: 'cover',
  },

  titlePage: {
    display: 'flex',
    paddingTop: '75px',
    paddingBottom: '75px',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },

  rightTextPage: {
    paddingTop: '12px',
    float: 'right',
    '@media (max-width: 768px)': {
      float: 'inherit',
    },
  },
  textTile: {
    color: 'white',
    fontFamily: 'Merriweather',
    fontSize: '50px',
    fontWeight: 700,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Muli',
    fontWeight: 400,
    fontSize: '14px',
  },
}

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
      <Container>
        <CartItemsContainer />
        {props.children}
      </Container>
    </AppProvider>
  )
}

export default Cart
