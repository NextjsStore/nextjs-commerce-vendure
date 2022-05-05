import React from "react";
import client from "../libs/apollo/ApolloClient";
import gql from "graphql-tag";
// import header footer all pages
import { makeStyles } from "@material-ui/core/styles";
import AddHead from "../components/AddHead";
import SideBarTop from "../components/sidebar";
import HeaderMid from "../components/HeaderMid";
import HeaderCenter from "../components/HeaderCenter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Container from "@mui/material/Container";


const useStyles = makeStyles({


});

const ProductDetail = (props => {
    const classes = useStyles()
    const { productData } = props;
    console.warn(props);
    let imageURl = '';
    return (
        <Container fixed>
            <div className="card bg-light mb-3 p-5">
                <div className="card-body">
                    <h4 className="card-title">{productData.name}</h4>
                    <img className={classes.productImg} src={productData?.image?.sourceUrl} alt="" />
                    <h6 className={classes.pricesale}>{productData.price}</h6>
                    <p className="card-text">{productData.shortDescription}</p>
                    <img className={classes.productImg} src={productData?.galleryImages?.nodes[0]?.sourceUrl} alt="" />
                    <p className="sku">SKU:  {productData.sku}</p>
                    <p className={classes.categories}>CATEGORIES: {productData?.productCategories?.nodes?.name}</p>
                    {/* <AddToCartButton product={productData} /> */}
                </div>
            </div>
        </Container>
    )
});

ProductDetail.getInitialProps = async function (context) {
    //console.log($id);
    let { query: { slug } } = context;
    const id = slug ? parseInt(slug.split('-').pop()) : context.query.databaseId;


    const PRODUCT_QUERY = gql` query Product($id:ID! ){
        product(id: $id, idType: DATABASE_ID) {
            id
            productId: databaseId
            averageRating
            slug
            sku
            shortDescription
            description
            productCategories {
                nodes {
                    name
                }
            }
            galleryImages {
              nodes {
                id
                title
                altText
                mediaItemUrl
                sourceUrl
                srcSet
              }
            }
            image {
              id
              uri
              title
              srcSet
              sourceUrl
            }
            ... on SimpleProduct {
              price
              id
              regularPrice
            }
            name
          }
    }`;
    const res = await client.query(({
        query: PRODUCT_QUERY,
        variables: { id }
    }));
    return {
        productData: res.data.product
    }
};


export default ProductDetail;
