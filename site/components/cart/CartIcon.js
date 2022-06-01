import React from 'react';
import { useContext } from 'react';
import { AppContext, AppProvider } from '../../lib/context/AppContext';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


const useStyles = makeStyles({
    containercart: {
        position: 'relative',
        cursor: 'pointer',
        marginTop: '5px',
        '& span': {
            position: 'absolute',
            bottom: '0px',
            right: '-6px',
            width: '20px',
            height: '20px',
            backgroundColor: '#40c6ff',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            borderRadius: '50%',
            color: '#fff'
        }
    }
});

const CartIcon = () => {

    const classes = useStyles();
    const [cart, setCart] = useContext(AppContext);
    const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
    const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';

    //console.log('productsCount',productsCount);
   // console.log('totalPrice', totalPrice);

    return (
        <React.Fragment>

            <AppProvider>
                <Link href="/cart" >
                    <div className={classes.containercart}>
                            <LocalMallOutlinedIcon />
                            {parseInt(productsCount) ? <span>{ parseInt(productsCount) }</span> : ''}
                    </div>
                </Link>
            </AppProvider>

        </React.Fragment>
    )
};

export default CartIcon;
