import Link from 'next/link'
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import AddToCartButton from '../../components/cart/AddToCartButton'
import { isEmpty } from 'lodash'
import GalleryCarousel from '../../components/single-product/gallery-carousel'
import CategoriesCarousel from '../../components/single-product/categories-carousel'
import RelatedProduct from '../../components/single-product/related-product'
import Price from '../../components/single-product/price'
import { ImageList } from '@mui/material'
import { ImageListItem } from '@mui/material'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@mui/material/Rating'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Banner from '../../assets/banner_page.png'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Collection from '../../components/collection'
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

export default function Product(props) {
  const classes = useStyles_pageShop()

  const { getcollections } = props

  const router = useRouter()
  const handleSubmit = (slug) => {
    router.push(`${slug}`)
  }
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Box>
      <Box className={classes.pageShop}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
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
            <Grid item lg={6}>
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

          <Grid item lg={9}>
            <Grid
              container
              spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }}
              columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}
            >
              {getcollections.length
                ? getcollections.map((product) => (
                    <Collection key={product.id} product={product} />
                  ))
                : ''}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export async function getStaticProps({ params, locale, locales }) {
  /*********AXIOS GRAPHQL */
  const endpoint =
    'http://localhost:3000/shop-api?vendure-token=xn5i72fr18t00v9ghbm'
  const headers = {
    'content-type': 'application/json',
    Authorization: '<token>',
  }
  const graphqlQuery = {
    query: `query fetchAuthor ($slug: String!){
      collection(slug: $slug) {
        productVariants {
          items {
            product {
              name
              slug
              id
              assets {
                source
              }
              variants{
                price
              }
              collections {
                name
                slug
              }
            }
          }
        }
      }
}
`,
    variables: { slug: params.slug },
  }

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  })

  const getcollections = response.data.data.collection.productVariants.items

  if (!getcollections) {
    throw new Error(`Product with slug '${params.slug}' not found`)
  }

  return {
    props: {
      getcollections,
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }) {
  const { products } = await commerce.getAllProductPaths()

  return {
    paths: locales
      ? locales.reduce((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product) => {
            arr.push(`/${locale}/collection${product.path}`)
          })
          return arr
        }, [])
      : products.map((product) => `/collection${product.path}`),
    fallback: 'blocking',
  }
}

// export async function getServerSideProps(context) {

//      const { params: { slug } } = context
//      //console.log(context);

//     const result= await client.query({
//         query: COLLECTION_QUERY,
//         variables: { slug }
//     });

//     return {
//         props: {
//             productrelate: result.data.collection.productVariants.items,
//         },

//     };
// }
