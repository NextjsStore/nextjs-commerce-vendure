import Link from 'next/link'
import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../../lib/context/AppContext'
import { addFirstProduct, updateCart } from '../../function'
import { AppProvider } from '../../lib/context/AppContext'

const colorHover = '#40c6ff'

const styles = {
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
    },
  },
}

const AddToCartButton = (props) => {
  const { product } = props
  //console.log('ADDTO CART-PRODUCT', product)
  const [cart, setCart] = useContext(AppContext)
  const [showViewCart, setShowViewCart] = useState(false)

  const handleAddToCartClick = () => {
    if (process.browser) {
      let existingCart = localStorage.getItem('woo-next-cart')

      // if cart has item(s) already, then update the exiting

      if (existingCart) {
        existingCart = JSON.parse(existingCart)

        const qtyToBeAdded = 1

        const updatedCart = updateCart(existingCart, product, qtyToBeAdded)
        setCart(updatedCart)
      } else {
        // add new cart
        const newCart = addFirstProduct(product)
        setCart(newCart)
      }
      setShowViewCart(true)
    }
  }

  return (
    <AppProvider>
      <React.Fragment>
        <button
          styles={styles.AddToCartButton}
          variant="contained"
          onClick={handleAddToCartClick}
        >
          Add To Cart ddd
        </button>
        {showViewCart ? (
          <Link href="/cart">
            <a>
              <button variant="contained" styles={styles.AddToCartButton}>
                View Cart
              </button>
            </a>
          </Link>
        ) : (
          ''
        )}
      </React.Fragment>
    </AppProvider>
  )
}

export default AddToCartButton
