import React from "react";
import { Container, Box, Grid } from '@mui/material';
import { AppProvider } from '../libs/context/AppContext';
// import icon
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import logo
import LogoeBay from '../assets/img/ebaylogo.png';
import arrow_down from '../assets/img/arrow_down.png';
// makestyle
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import client from "../libs/apollo/ApolloClient";
import { useRouter } from "next/router";
import gql from "graphql-tag";

export const PER_PAGE_FIRST = 9;
export const PER_PAGE_REST = 12;


const GET_SEARCH_RESULTS = gql`query Product($collectionSlug: String!) {
    search(input: {collectionSlug: $collectionSlug , take: 12}) {
        items {
          productName
          price {
            ... on SinglePrice {
              __typename
              value
            }
          }
          slug
          productAsset {
            preview
          }
        }
      }
    }`;

const Item = () => { };
const useStyle_searchHeader = makeStyles({

    HeaderMidItem: {
        borderBottom: '1px solid #eee',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    logo: {
        '@media (max-width: 899px)': {
            margin: '15px 0px',
            textAlign: 'center',
        }
    },
    SearchHeader: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        '& select': {
            width: ' 25%',
            float: 'left',
            height: '36px',
            paddingLeft: '15px',
            border: '1px solid #d1d3d4',
            borderRight: 'none',
            borderRadius: '50px 0 0 50px',
            color: '#666',
            minWidth: '187px',
            appearance: 'none',
            backgroundImage: `url(${arrow_down.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px top 14px',
            fontSize: '15px',
            fontFamily: "Mulish,'sans-serif'",
            fontWeight: 400,
            '&:focus': {
                outline: 'none',
            },
            '@media (max-width: 599px)': {
                display: 'none',
            }
        },
        '& input': {
            height: '36px',
            width: ' 100%',
            padding: '0px 95px 0px 15px',
            border: '1px solid #d1d3d4',
            borderRadius: '0px 50px 50px 0px',
            color: '#666',
            fontSize: '15px',
            fontFamily: "Mulish,'sans-serif'",
            fontWeight: 400,
            '&:focus': {
                outline: 'none',
            },
            '@media (max-width: 599px)': {
                borderRadius: '50px',
            }
        },
        '& button': {
            position: 'absolute',
            right: '10px',
            top: '0px',
            border: 'none',
            backgroundColor: 'transparent',
            overflow: 'hidden',
            width: '60px',
            height: '36px',
            padding: 0,
            borderLeft: '1px solid #d1d3d4',
            zIndex: 10,
            '&:hover': {
                cursor: 'pointer',
            },
            '& svg': {
                fontSize: '25',
                margin: '7px -9px 0px 0px',
                color: '#444',
            }
        }
    },
    boxCart: {
        textAlign: 'right',
    },
    cartHeader: {
        position: 'relative',
        display: 'inline-block',
        width: '30px',
        height: '30px',
        '& svg': {
            fontSize: '30px',
        },


    }
});



const HeaderMid = (props) => {

    const router = useRouter();
    // const handleSubmit = (value) => {
    //     //console.log(value);
    //     router.push(`?cat=${value}`);
    // };


    const [searchQuery, setSearchQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    const [queryResultPosts, setQueryResultPosts] = useState({});
    const [showResultInfo, setShowResultInfo] = useState(false);


    function Test() {
        const [fetchPosts, { loading }] = useLazyQuery(GET_SEARCH_RESULTS, {
            notifyOnNetworkStatusChange: true,
            onCompleted: (data) => {
                setQueryResultPosts(data?.products ?? {});
                setShowResultInfo(true);
            },
            onError: (error) => {
                setSearchError(error?.graphQLErrors ?? '');
            }
        });
    }
    const handleSubmit = (event, value) => {

        event.preventDefault();
        setShowResultInfo(false)
        router.push(`/searchresult?collectionSlug=${searchQuery}`);
    };

    const changeSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const classes = useStyle_searchHeader();

    return (
        <>
        <AppProvider>
            <div className={classes.HeaderMidItem}>
                <React.Fragment>
                    <Container maxWidth="lg">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={3}>
                                    <div className={classes.logo}>
                                        <Link href='/'>
                                            <a>
                                                <img src={LogoeBay.src} />
                                            </a>
                                        </Link>
                                    </div>
                                </Grid>
                                <Grid item xs={9} sm={10} md={8}>
                                    <form className={classes.SearchHeader} id="searchform" onSubmit={handleSubmit}>
                                        <select onChange={e => changeSearchQuery(e)} name="">
                                            <option value="">Shop by collection</option>
                                            <option value="">Uncategorized</option>
                                            <option value="custom-prints">---Custom Prints---</option>
                                            <option value="free-file-check">---Free file check---</option>
                                            <option value="graphic-design">--- GraphicDesign---</option>
                                            <option value="mailing">---Mailing---</option>
                                            

                                        </select>
                                        <input
                                            type="text"
                                            placeholder="What are you looking for..."
                                            value={searchQuery}
                                            onChange={(event) => setSearchQuery(event?.target?.value)}
                                        />

                                        <button type="submit" onClick={handleSubmit}><SearchOutlinedIcon /></button>

                                    </form>
                                </Grid>
                                <Grid item xs={3} sm={2} md={1}>
                                    <div className={classes.boxCart}>
                                        <a className={classes.cartHeader}>
                                            <CartIcon />

                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
            </div>
            </AppProvider>
        </>
    );
};

HeaderMid.PropTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
    handleSearchForm: PropTypes.func
}

HeaderMid.defaultProps = {
    searchQuery: '',
    setSearchQuery: () => null,
    handleSearchForm: () => null
}
export async function getStaticProps() {
    const { data, errors } = await client.query({
        query: GET_SEARCH_RESULTS,
    });
    const defaultProps = {
        props: {
            data: { ...data, slug: 'slug' }
        },
        revalidate: 1,
    };
}


export default HeaderMid;
