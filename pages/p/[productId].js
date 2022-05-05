import client from '../../libs/apollo/ApolloClient';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';


const singleProduct = withRouter(props => {
    const { singleData } = props;
    return (
        <div>
            Product
            <div>
                --Name: {singleData.name}
            </div>
            <div>--Description: {singleData.description ? singleData.description : 'description'}</div>
            <div>--Short Description: {singleData.shortDescription ? singleData.shortDescription : 'shortDescription'}</div>
            <div>--Price: {singleData.price}</div>
            <div>--Product Image: {singleData.image.sourceUrl}</div>
            {/* <div>Gallery Images: {singleData.galleryImages.nodes[0].sourceUrl}</div> */}
            <div>--SKU: {singleData.sku ? singleData.sku : 'SKU'}</div>
        </div>
    )
});

singleProduct.getInitialProps = async function( context ){
    let { query: { productId }} = context;
    const id = context.query.productId;

    const PRODUCT_QUERY= gql`query Product( $id: ID! ) {
        product(id: $id, idType: DATABASE_ID){
            name
            description
            sku
            image {
                sourceUrl
            }
            productCategories {
                nodes {
                    name
                }
            }
            shortDescription
            galleryImages {
                nodes {
                    sourceUrl
                }
            }
            ... on SimpleProduct {
                price
            }
            ... on VariableProduct {
                variations {
                    nodes {
                    price
                    }
                }
            }
        }
    }`;

    const res = await client.query({
        query: PRODUCT_QUERY,
        variables: { id }
    })

    return {
        singleData: res.data.product
    }
}

export default singleProduct;