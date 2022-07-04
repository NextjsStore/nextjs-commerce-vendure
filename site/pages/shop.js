import React from 'react'
import Product from '../components/product'
import { useRouter } from 'next/router'
import commerce from '@lib/api/commerce'
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Grid,
  Divider,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'

// const colorHover = '#40c6ff'
// const styles = {
//   productCategoryText: {
//     marginRight: '25px',
//   },
//   textCartegory: {
//     padding: '10px 0px',
//     borderBottom: '1px solid #ccc',
//     color: '#676c77',
//     transition: '0.21s',
//     '& div.MuiTreeItem-content': {
//       padding: '0px!important',
//       '&:hover': {
//         background: '#fff',
//       },
//       '&:focus': {
//         background: '#fff',
//       },
//       '& svg': {
//         color: '#676c77',
//       },
//     },
//     '&:hover': {
//       color: '#000',
//     },
//   },
//   titleCartegory: {
//     marginBottom: '10px',
//     marginTop: '10px',
//   },
//   titleSideBarCategory: {
//     position: 'relative',
//     borderBottom: ' 1px solid #ccc',
//     paddingBottom: '15px',
//     marginBottom: '20px',
//     fontFamily: 'Merriweather,sans-serif',
//     fontWeight: 'bold',
//     fontSize: '24px',
//     '&:before': {
//       position: 'absolute',
//       content: '""',
//       width: '60px',
//       height: '1px',
//       bottom: '-1px',
//       backgroundColor: `${colorHover}`,
//     },
//   },
//   categoryText: {
//     paddingLeft: '0px',
//     '&:hover': {
//       backgroundColor: '#fff !important',
//     },
//   },
//   textTile: {
//     color: 'white',
//     fontFamily: 'Merriweather',
//     fontSize: '50px',
//     fontWeight: 700,
//   },
//   titleText: {
//     color: 'white',
//     fontFamily: 'Muli',
//     fontWeight: 400,
//     fontSize: '14px',
//   },
// }

const Shop = (props) => {
  const { products, categories } = props

  const router = useRouter()
  const handleSubmit = (slug) => {
    router.push(`collection/${slug}`)
  }

  return (
    <Box>
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
            <Flex w="1200px" m="0px auto">
              <Box lineHeight="3">
                <Heading fontSize="40" variant="h1">
                  Shop
                </Heading>
              </Box>
              <Spacer />
              <Box lineHeight="10">
                <Flex>
                  <Text component="h6" variant="h6">
                    Home
                  </Text>
                  <Text p="0px 10px"> / </Text>
                  <Text component="h6" variant="h6">
                    My account
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Container w="1200px" m="12px auto">
        <Flex>
          <Grid item lg={3}>
            <Box>
              <Heading
              component="h4"
              variant="h4"
              borderBottom="1px solid #ccc"
              pb="20"
            >
                Product Category
              </Heading>
            </Box>
            <div>
              {categories.length > 0 &&
                categories.map((item) => (
                  <Box key={item}>
                    <Box disablePadding>
                      <Box style={styles.categoryText}>
                        <Button onClick={() => handleSubmit(`${item.slug}`)}>
                          {item.name}
                        </Button>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                ))}
            </div>
          </Grid>
          <Box item lg={8}>
            <Box
              spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
              columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
            >
              {products.length > 0 &&
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default Shop

export async function getStaticProps({ preview, locale, locales }) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 12 },
    config,
    preview,
    // Saleor provider only
    ...{ featured: true },
  })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  const { categories } = await siteInfoPromise
  const { products } = await productsPromise

  return {
    props: {
      categories,
      products,
    },
    revalidate: 60,
  }
}
