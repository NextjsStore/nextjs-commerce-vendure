import React from 'react'
import Product from '../components/product'
import { useRouter } from 'next/router'
import commerce from '@lib/api/commerce'
import axios from 'axios'
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Grid,
  Divider,
  Center,
} from '@chakra-ui/react'

const colorHover = '#40c6ff'
const styles = {
  productCategoryText: {
    marginRight: '25px',
  },
  textCartegory: {
    padding: '10px 0px',
    borderBottom: '1px solid #ccc',
    color: '#676c77',
    transition: '0.21s',
    '& div.MuiTreeItem-content': {
      padding: '0px!important',
      '&:hover': {
        background: '#fff',
      },
      '&:focus': {
        background: '#fff',
      },
      '& svg': {
        color: '#676c77',
      },
    },
    '&:hover': {
      color: '#000',
    },
  },
  titleCartegory: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  titleSideBarCategory: {
    position: 'relative',
    borderBottom: ' 1px solid #ccc',
    paddingBottom: '15px',
    marginBottom: '20px',
    fontFamily: 'Merriweather,sans-serif',
    fontWeight: 'bold',
    fontSize: '24px',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '60px',
      height: '1px',
      bottom: '-1px',
      backgroundColor: `${colorHover}`,
    },
  },
  categoryText: {
    paddingLeft: '0px',
    '&:hover': {
      backgroundColor: '#fff !important',
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

const Shop = (props) => {
  const { products, collections } = props

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
            <Flex>
              <Box>
                <Heading component="h3" variant="h3">
                  My account
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading component="h6" variant="h6">
                  Home
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
        <Flex>
          <Grid item lg={3}>
            <Box>
              <Text
                style={styles.titleSideBarCategory}
                component="h4"
                variant="h4"
              >
                Product Category
              </Text>
            </Box>
            <div>
              {collections.length
                ? collections.map((item) => (
                    <Box key={item}>
                      <Box disablePadding>
                        <Box style={styles.categoryText}>
                          <Box onClick={() => handleSubmit(`${item.slug}`)}>
                            {item.name}
                          </Box>
                        </Box>
                      </Box>
                      <Divider />
                    </Box>
                  ))
                : ''}
            </div>
          </Grid>

          <Box item lg={8}>
            <Box
              spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
              columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
            >
              {products.length
                ? products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))
                : ''}
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
  const { products } = await productsPromise

  const endpoint = process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL
  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  }
  const graphqlQuery = {
    operationName: 'fetchAuthor',
    query: `
      query fetchAuthor {
        collections{
          items{
            id
            name
            slug
          }
        }
      }
    `,
  }

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  })

  const collections = response.data.data.collections.items

  return {
    props: {
      collections,
      products,
    },
    revalidate: 60,
  }
}
