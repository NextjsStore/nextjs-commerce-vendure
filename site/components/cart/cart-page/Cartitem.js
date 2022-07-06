import { useState } from 'react'
import { updateCart2 } from '../../../function'
import { Box, Text, Image } from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

const CartItem = ({ item, setCart, handleRemoveProductClick }) => {
  const [productCount, setProductCount] = useState(item.qty)

  const handleQtyChange = (event) => {
    if (process.browser) {
      const newQty = event.target.value
      setProductCount(newQty)

      //console.warn(newQty);

      // LAY DU LIEU TU LOCALSTORAGE
      let existingCart = localStorage.getItem('woo-next-cart')
      existingCart = JSON.parse(existingCart)
      //@TOTO Update the cart
      const updatedCart = updateCart2(existingCart, item, false, newQty)
      setCart(updatedCart)
    }
  }

  return (
    <Box>
      {/*Icon close */}
      <th>
        <Text
          onClick={(event) => handleRemoveProductClick(event, item?.productId)}
        >
          <AiOutlineClose />
        </Text>
      </th>
      {/* image */}
      <th>
        <img width="150" src={item.image} />
      </th>
      {/* image */}
      <th>{item?.name}</th>
      {/* PRICE */}
      <th color="rgb(64,198,255)">{'$ ' + item?.price}</th>
      {/* QUANTITY */}
      <th>
        <input
          w="100%"
          h="40px"
          pl="10px"
          size="small"
          type="number"
          min="1"
          value={productCount}
          onChange={handleQtyChange}
        />
      </th>
      {/* Total */}
      <th color="rgb(64,198,255)">{item.totalPrice}</th>
    </Box>
  )
}

export default CartItem
