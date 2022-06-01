import React from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import Product from '../components/product';
import Collection from '../components/collection';
import Divider from '@mui/material/Divider';
import { useRouter } from "next/router";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Banner from '../assets/banner_page.png';
import commerce from '@lib/api/commerce';



// const PRODUCT_QUERY = gql`query Product{
//   products(options: {take:12}) {
//     items {
//       name
//       slug
//       assets {
//         name
//         source
//       }
//       variants {
//         price
//       }
//       collections {
//         name
//         id
//         slug
//       }
//     }
//   }
//   }`;

// const COLLECTION_QUERY = gql`query Product($slug:String!) {
//     collection(slug: $slug) {
//       name
//       productVariants {
//         items {
//           product {
//             name
//             description
//             slug
//             assets {
//               source
//             }
//             variants {
//               price
//             }
//             collections{
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//     }`;

const colorHover = '#40c6ff';
const useStyles_pageShop = makeStyles(theme => ({
  pageShop: {
    marginBottom: "60px",
    minHeight: "200px",
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover"
  },

  titlePage: {
    display: "flex",
    paddingTop: "75px",
    paddingBottom: "75px",
    "@media (max-width: 768px)": {
      display: "block"
    }
  },

  rightTextPage: {
    float: "right",
    paddingTop: "12px",
    "@media (max-width: 768px)": {
      float: "inherit"
    }
  },
  productCategory: {
    display: "flex",
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column-reverse"
    }
  },
  productCategoryText: {
    marginRight: "25px"
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
      }
    },
    '&:hover': {
      color: '#000',
    }
  },
  titleCartegory: {
    marginBottom: "10px",
    marginTop: "10px",
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
    }
  },
  categoryText: {
    paddingLeft: "0px",
    '&:hover': {
      backgroundColor: "#fff !important",
    }
  },
  textTile: {
    color: "white",
    fontFamily: "Merriweather",
    fontSize: "50px",
    fontWeight: 700
  },
  titleText: {
    color: "white",
    fontFamily: "Muli",
    fontWeight: 400,
    fontSize: "14px"
  },
}))

export default function Shop(props) {
  const classes = useStyles_pageShop();
  const {collection,products } = props;
  // console.log('Shop Product', products);
  
  const router = useRouter();
  const handleSubmit = (slug) => {
    router.push(`collection/${slug}`);
  };

  return (

    <Box>
      <Box className={classes.pageShop}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography className={classes.textTile} component="h3" variant="h3">
                  Shop
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.rightTextPage}>
                <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">
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
          <Grid item lg={6} className={classes.productCategoryText}>
            <Box >
              <Typography className={classes.titleSideBarCategory} component="h4" variant="h4">Product Category</Typography>
            </Box>
            <List>
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`custom-prints`)} >
                    Custom Prints
                  </ListItemText>

                </ListItemButton>

              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`free-file-check`)} >
                    Free file check
                  </ListItemText>

                </ListItemButton>

              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText}>
                  <ListItemText onClick={() => handleSubmit(`graphic-design`)} >
                    Graphic Design
                  </ListItemText>

                </ListItemButton>

              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton className={classes.categoryText} >
                  <ListItemText onClick={() => handleSubmit(`mailing`)}>
                    Mailing
                  </ListItemText>

                </ListItemButton>

              </ListItem>
            </List>
          </Grid>

          <Grid item lg={8}>
            <Grid container spacing={{ sm: 2, md: 2, xs: 3, lg: 3 }} columns={{ xl: 3, sm: 2, md: 3, lg: 3 }}>
              {products.length ? (
                products.map(product => <Product key={product.id} product={product} />)
              ) : ''}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>

  );
}

export async function getStaticProps({
  preview,
  locale,
  locales,
}) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 12 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true }),
  })
  const { products } = await productsPromise
  

  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}

// export async function getServerSideProps({ query }) {

//   const result = await client.query({
//     query: PRODUCT_QUERY,
//   });



//   return {
//     props: {
//       products: result.data.products.items,
//     },
//   };
// }