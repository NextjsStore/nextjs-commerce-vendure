import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { makeStyles } from '@material-ui/core/styles'
import Product from '@components/Product'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Banner from '../assets/banner_page.png'
import commerce from '@lib/api/commerce'
import axios from 'axios'

const colorHover = '#40c6ff'
const useStyles_pageShop = makeStyles((theme) => ({
  pageShop: {
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
    float: 'right',
    paddingTop: '12px',
    '@media (max-width: 768px)': {
      float: 'inherit',
    },
  },
  productCategory: {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
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
}))

const Shop = (props) => {
  const classes = useStyles_pageShop()
  const { products, collections } = props
  console.log('Shop Product', products)
  console.log('Shop Collections', collections)

  const router = useRouter()
  const handleSubmit = (slug) => {
    router.push(`collection/${slug}`)
  }

  return (
    <Box>
      <Box className={classes.pageShop}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={3}>
              <Box>
                <Typography
                  className={classes.textTile}
                  component="h3"
                  variant="h3"
                >
                  Shop
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={9}>
              <Box className={classes.rightTextPage}>
                <Breadcrumbs sx={{ color: 'white' }} aria-label="breadcrumb">
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Home
                  </Typography>
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Shop
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box className={classes.productCategory}>
          <Grid item lg={3} className={classes.productCategoryText}>
            <Box>
              <Typography
                className={classes.titleSideBarCategory}
                component="h4"
                variant="h4"
              >
                Product Category
              </Typography>
            </Box>
            <div>
              {collections.length
                ? collections.map((item) => (
                    <List key={item}>
                      <ListItem disablePadding>
                        <ListItemButton className={classes.categoryText}>
                          <ListItemText
                            onClick={() => handleSubmit(`${item.slug}`)}
                          >
                            {item.name}
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                    </List>
                  ))
                : ''}
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`custom-prints`)}>
                    Custom Prints
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`free-file-check`)}>
                    Free file check
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`graphic-design`)}>
                    Graphic Design
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`mailing`)}>
                    Mailing
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          <Grid
            container
            spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
            columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
          >
            {products.length
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : ''}
          </Grid>
        </Box>
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
