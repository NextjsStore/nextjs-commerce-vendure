import CartItemsContainer from '../components/cart/cart-page/CartItemsContainer'
import {
  Flex,
  Heading,
  Spacer,
  Box,
  Container,
  Center,
  Text,
} from '@chakra-ui/react'
import commerce from '@lib/api/commerce'
import { BsBox } from 'react-icons/bs'

const Cart = (props) => {
  return (
    <>
      <Box h="240px">
        <Box
          color="#fff"
          backgroundImage="/assets/banner_page.png"
          h="200px"
          mb="6"
        >
          <Flex
            maxW={{
              md: '768px',
              lg: '960px',
              xl: '1200px',
            }}
            m="12px auto"
          >
            <Box>
              <Heading fontSize="40" variant="h1" lineHeight="200px">
                Shop
              </Heading>
            </Box>
            <Spacer />
            <Box lineHeight="200px">
              <Flex>
                <Text component="h6" variant="h6">
                  Home
                </Text>
                <Text p="0px 10px"> / </Text>
                <Text component="h6" variant="h6">
                  Shop
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
        m="12px auto"
      >
        <CartItemsContainer />
        {props.children}
      </Box>
    </>
  )
}

export default Cart

export async function getStaticProps({ preview, locale, locales }) {
  const config = { locale, locales }

  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  const { categories } = await siteInfoPromise

  return {
    props: {
      categories,
    },
    revalidate: 86400,
  }
}
