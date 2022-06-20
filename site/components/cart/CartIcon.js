import React from 'react'
import { useContext } from 'react'
import { AppContext, AppProvider } from '../../lib/context/AppContext'
import Link from 'next/link'
import { HiOutlineShoppingBag } from 'react-icons/hi'
const CartIcon = () => {
  const [cart, setCart] = useContext(AppContext)
  const productsCount =
    null !== cart && Object.keys(cart).length ? cart.totalProductsCount : ''
  const totalPrice =
    null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : ''

  //console.log('productsCount',productsCount);
  // console.log('totalPrice', totalPrice);

  return (
    <AppProvider>
      <Link href="/cart">
        <a>
          <div className={classes.containercart}>
            <LocalMallOutlinedIcon />
            {parseInt(productsCount) ? (
              <span>{parseInt(productsCount)}</span>
            ) : (
              ''
            )}
          </div>
        </a>
      </Link>
    </AppProvider>
  )
}

export default CartIcon
