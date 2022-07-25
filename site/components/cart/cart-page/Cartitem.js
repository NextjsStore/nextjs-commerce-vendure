import { useState } from 'react'
import { updateCart2 } from '../../../function'
import {
  Container,
  Box,
  Text,
  Table,
  Image,
  Tr,
  Td,
  Input,
} from '@chakra-ui/react'
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
    <Tr>
      {/*Icon close */}
      <Td w=" 20px">
        <Text
          onClick={(event) => handleRemoveProductClick(event, item?.productId)}
        >
          <AiOutlineClose />
        </Text>
      </Td>
      {/* image */}
      <Td>
        <Image w="100%" src={item.image}  alt=""/>
      </Td>
      {/* image */}
      <Td>{item?.name}</Td>
      {/* PRICE */}
      <Td color="rgb(64,198,255)">{'$ ' + item?.price}</Td>
      {/* QUANTITY */}
      <Td>
        <Input
          w="100%"
          h="40px"
          pl="10px"
          size="small"
          type="number"
          min="1"
          value={productCount}
          onChange={handleQtyChange}
        />
      </Td>
      {/* Total */}
      <Td color="rgb(64,198,255)">{item.totalPrice}</Td>
    </Tr>
  )
}

export default CartItem
