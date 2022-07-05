import { useState } from 'react'
import { updateCart2 } from '../../../function'
import { Box, Text, Image } from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

const styles = {
  cartelementPrice: {
    color: 'rgb(64,198,255)',
  },
  cartelementTotal: {
    color: 'rgb(64,198,255)',
  },
  cartqtyinput: {
    width: '100%',
    height: '40px',
    paddingLeft: '10px',
  },
}

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
      <th styles={styles.cartelement}>
        <Text
          styles={styles.cartcloseicon}
          onClick={(event) => handleRemoveProductClick(event, item?.productId)}
        >
          <AiOutlineClose />
        </Text>
      </th>
      {/* image */}
      <th styles={styles.cartelementImg}>
        <Image width={266} height={270} src={item.image} alt="" />
      </th>
      {/* image */}
      <th styles={styles.cartelementName}>{item?.name}</th>
      {/* PRICE */}
      <th styles={styles.cartelementPrice}>{'$ ' + item?.price}</th>
      {/* QUANTITY */}
      <th styles={styles.cartelementInput}>
        <input
          styles={styles.cartqtyinput}
          size="small"
          type="number"
          min="1"
          value={productCount}
          onChange={handleQtyChange}
        />
      </th>
      {/* Total */}
      <th styles={styles.cartelementTotal}>{item.totalPrice}</th>
    </Box>
  )
}

export default CartItem
