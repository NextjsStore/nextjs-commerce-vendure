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
        price
        name
      }
    }
  }
}`;

const PRODUCT_SELLER = gql`query Product {
  products(options: {skip: 3, take: 8}) {
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
const Home = (props) => {
  const { products,productseller } = props;
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
        </Container>

        <NewImageList />
        <Container>
          <TabSeller />
          <Grid container spacing={{ sm: 2, md: 2, xs: 4, lg: 3 }} columns={{ xs: 4, sm: 6, md: 4, lg: 4 }}>
            {productseller.length ? (
              productseller.map(product => <Product key={product.id} product={product} />)
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
  //const cat = query.cat ? query.cat : "";
  //const cat1 = query.cat1 ? query.cat1 : "";
  const result = await client.query({
    query: PRODUCT_QUERY,
  });
  const result2 = await client.query({
    query: PRODUCT_SELLER,
  });
  return {
    props: {
      products: result.data.products.items,
      productseller: result2.data.products.items,
    },
  };
}