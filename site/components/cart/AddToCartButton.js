import Link from 'next/link';
import React from 'react';
import { useState, useContext } from 'react';
//import { AppContext } from '../../libs/context/AppContext';
//import { addFirstProduct, updateCart } from '../../function';

//import { makeStyles } from "@material-ui/core/styles";
//import { AppProvider } from '../../libs/context/AppContext';
import { makeStyles } from "@material-ui/core/styles";


const colorHover = '#40c6ff';

const useStyles = makeStyles({
    btnviewcart: {
        margin: '25px',
    },
    AddToCartButton: {
        borderRadius: '20px',
        backgroundColor: `${colorHover}`,
        height: '40px',
        lineHeight: '34px',
        padding: '0px 30px',
        color: '#fff',
        border: 'none',
        textTransform: 'uppercase',
        fontSize: '16px',
        marginTop: '20px',
        '&:hover': {
            cursor: 'pointer',
        },
        '&:last-child': {
            marginLeft: '20px',
        }
    }
});


const AddToCartButton = (props) => {

    const classes = useStyles();
    const { product } = props;
    //const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);


    // const handleAddToCartClick = () => {
    //     if (process.browser) {
    //         let existingCart = localStorage.getItem('woo-next-cart');

    //         // if cart has item(s) already, then update the exiting

    //         if (existingCart) {
    //             existingCart = JSON.parse(existingCart);

    //             const qtyToBeAdded = 1;

    //             const updatedCart = updateCart(existingCart, product, qtyToBeAdded);
    //             setCart(updatedCart);

    //         } else {
    //             // add new cart
    //             const newCart = addFirstProduct(product);
    //             setCart(newCart);
    //         }
    //         setShowViewCart(true);
    //     }
    // };


    return (
       
            <React.Fragment>
                <button className={classes.AddToCartButton} variant="contained"  >Add To Cart</button>
                {showViewCart ? (
                    <Link href="/cart">
                        <a>
                            <button variant="contained" className={classes.AddToCartButton}>View Cart</button>
                        </a>
                    </Link>
                ) : ''}
            </React.Fragment>
        
    )
};

export default AddToCartButton;
