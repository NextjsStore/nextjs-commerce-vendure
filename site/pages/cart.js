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
import CartItemsContainer from '../components/cart/Cart-Page/CartItemsContainer'

const Cart = (props) => {
  return (
    <>
      <Box h="240px">
        <Box>
          <Box>
            <Box
              color="#fff"
              backgroundImage="/assets/banner_page.png"
              h="200px"
              mb="6"
            >
              <Flex w="1200px" m="0px auto">
                <Box>
                  <Heading fontSize="40" variant="h1" lineHeight="200px">
                    Cart
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
                      Cart
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Center>
        <Container>
          <CartItemsContainer />
          {props.children}
        </Container>
      </Center>
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
    revalidate: 60,
  }
}
