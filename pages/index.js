import React from 'react'
import { Container, Grid } from '@mui/material';
// slider
import SwipeableTextMobileStepper from '../components/slider';
// end slider

// product
import Product from '../components/product';
// end product tabs

// newlistimg
import NewImageList from '../components/newlistimg';
// end newlistimg

// imglist
import SellerImageList from '../components/imglist';
// end imglist

// form Email
import NameForm from '../components/formEmail';
// end  form Email

//import request data
import client from '../libs/apollo/ApolloClient';
import gql from 'graphql-tag';
import { AppContext } from '../libs/context/AppContext';
import { AppProvider } from '../libs/context/AppContext';
import DealsOfDay from '../components/DealsOfDay';
import Tab from '../components/tab';
import TabSeller from '../components/tabSeller';
import Logo from '../components/tabsLogo';
import Collection from '../components/collection';

const PRODUCT_QUERY = gql`query Product{
  products(options: {take: 8}) {
    items {
      id
      name
      description
      slug
      assets {
        source
      }
      variants {
        currencyCode
        price
        name
      }
    }
  }
}`;

const PRODUCT_SELLER = gql`query Product {
  products(options: {skip: 4, take: 8}) {
    items {
      name
      slug
      id
      description
      assets {
        source
      }
      variants {
        price
      }
    }
  }
}`

const COLLECTION_QUERY = gql`query Product($slug:String!) {
  collection(slug: $slug) {
    slug
    productVariants {
      items {
        product {
          name
          description
          slug
          assets {
            source
          }
          variants {
            price
          }
          collections{
            name
            slug
          }
        }
      }
    }
  }
}`;

const COLLECTION_QUERY2 = gql`query Product($slug1:String!) {
  collection(slug: $slug1) {
    slug
    productVariants {
      items {
        product {
          name
          description
          slug
          assets {
            source
          }
          variants {
            price
          }
          collections{
            name
            slug
          }
        }
      }
    }
  }
}`;

const Home = (props) => {
  const { products,productseller, products2, productseller2 } = props;
   //console.log(products);
  // console.log(productseller);
  return (
    <AppProvider>
      <div>
        <SwipeableTextMobileStepper />
        <DealsOfDay />
        <Container>
          <Tab />
          <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {products.length ? (
              products.map(product => <Product key={product.id} product={product} />)
            ) : ''}
          </Grid>
          <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {products2.length ? (
              products2.map(product => <Collection key={product.id} product={product} />)
            ) : ''}
          </Grid>
        </Container>

        <NewImageList />
        <Container>
          <TabSeller />
          <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {productseller.length ? (
              productseller.map(product => <Product key={product.id} product={product} />)
            ) : ''}
          </Grid>
          <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {productseller2.length ? (
              productseller2.map(product => <Collection key={product.id} product={product} />)
            ) : ''}
          </Grid>
        </Container>
        <SellerImageList />
        <Logo />
        <NameForm />
      </div>
    </AppProvider>
  )
}
export default Home;
export async function getServerSideProps({ query }) {

  const slug = query.slug ? query.slug : '';
  const slug1 = query.slug1 ? query.slug1 : '';
  //const cat = query.cat ? query.cat : "";
  //const cat1 = query.cat1 ? query.cat1 : "";
  const result = !slug ? await client.query({
    query: PRODUCT_QUERY,
  }) : await client.query ({
    query:  COLLECTION_QUERY,
    variables: { slug },
  });

      /*PRODUCTS SELLER */
  const result2 = !slug1 ? await client.query({
    query: PRODUCT_SELLER,
  }) : await client.query ({
    query: COLLECTION_QUERY2,
    variables: { slug1 },
  });
  return {
    props: {
      products: !slug ? result.data.products.items : '',
      products2: slug ? result.data.collection.productVariants.items : '',
      /*PRODUCTS SELLER */
      productseller: !slug1 ? result2.data.products.items : '',
      productseller2: slug1 ? result2.data.collection.productVariants.items : '',
    },
  };
}