import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { updateCart2 } from '../../../function'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles_cartItem = makeStyles((theme) => ({
  cartelementPrice: {
    color: 'rgb(64,198,255)',
  },
  cartelementTotal: {
    color: 'rgb(64,198,255)',
  },
  cartqtyinput: {
    width: '50%',
    height: '40px',
    paddingLeft: '10px',
  },
}))

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

  const classes = useStyles_cartItem()
  return (
    <TableRow className={classes.cartitem} key={item.productId}>
      {/*Icon close */}
      <TableCell className={classes.cartelement}>
        <Typography
          className={classes.cartcloseicon}
          onClick={(event) => handleRemoveProductClick(event, item?.productId)}
        >
          <CloseIcon />
        </Typography>
      </TableCell>
      {/* image */}
      <TableCell className={classes.cartelementImg}>
        <img width="150" src={item.image} alt="Cart" />
      </TableCell>
      {/* image */}
      <TableCell className={classes.cartelementName}>{item?.name}</TableCell>
      {/* PRICE */}
      <TableCell className={classes.cartelementPrice}>
        {'$ ' + item?.price}
      </TableCell>
      {/* QUANTITY */}
      <TableCell className={classes.cartelementInput}>
        <input
          className={classes.cartqtyinput}
          size="small"
          type="number"
          min="1"
          value={productCount}
          onChange={handleQtyChange}
        />
      </TableCell>
      {/* Total */}
      <TableCell className={classes.cartelementTotal}>
        {item.totalPrice}
      </TableCell>
    </TableRow>
  )
}

export default CartItem
