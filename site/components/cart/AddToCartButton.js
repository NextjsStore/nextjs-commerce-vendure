import Link from 'next/link'
import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../../lib/context/AppContext'
import { addFirstProduct, updateCart } from '../../function'
import { Button } from '@chakra-ui/react'

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
    <>
      <React.Fragment>
        <Button
          borderRadius="20px"
          h="40px"
          lineHeight="34px"
          p="0px 30px"
          color="#fff"
          border="none"
          bg="#40c6ff"
          textTransform="uppercase"
          fontSize="16px"
          mt="20px"
          variant="contained"
          onClick={handleAddToCartClick}
        >
          Add To Cart
        </Button>
        {showViewCart && (
          <Link href="/cart">
            <a>
              <Button
                variant="contained"
                borderRadius="20px"
                h="40px"
                lineHeight="34px"
                p="0px 30px"
                color="#fff"
                border="none"
                bg="#40c6ff"
                textTransform="uppercase"
                fontSize="16px"
                mt="20px"
              >
                View Cart
              </Button>
            </a>
          </Link>
        )}
      </React.Fragment>
    </>
  )
}

export default AddToCartButton
