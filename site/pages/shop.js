import React from 'react'
import Product from '../components/product'
import { useRouter } from 'next/router'
import Banner from '../assets/banner_page.png'
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
  Center,
  List,
  ListItem,
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
  const { products } = props
  // console.log('Shop Product', products);

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
        <Box className={classes.productCategory}>
          <Grid item lg={3} className={classes.productCategoryText}>
            <Box>
              <Text
                style={styles.titleSideBarCategory}
                component="h4"
                variant="h4"
              >
                Product Category
              </Text>
            </Box>
            <List>
              <ListItem disablePadding>
                <List style={styles.categoryText}>
                  <ListItem onClick={() => handleSubmit(`custom-prints`)}>
                    Custom Prints
                  </ListItem>
                </List>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <List style={styles.categoryText}>
                  <ListItem onClick={() => handleSubmit(`free-file-check`)}>
                    Free file check
                  </ListItem>
                </List>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <List style={styles.categoryText}>
                  <ListItem onClick={() => handleSubmit(`graphic-design`)}>
                    Graphic Design
                  </ListItem>
                </List>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <List style={styles.categoryText}>
                  <ListItem onClick={() => handleSubmit(`mailing`)}>
                    Mailing
                  </ListItem>
                </List>
              </ListItem>
            </List>
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

  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}
