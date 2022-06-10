import * as React from 'react'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AppContext } from '../../../lib/context/AppContext'
import CartItem from './Cartitem'
import { Button, Grid } from '@mui/material'
import { useMutation, useQuery } from '@apollo/client'
import { removeItemFromCart } from '../../../function'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Modal from '@mui/material/Modal'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as yup from 'yup'

//import UPDATE_CART from "../../../mutations/update-cart";
//import GET_CART from "../../../queries/get-cart";
//import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
// import { isEmpty } from 'lodash'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const useStyles_cart = makeStyles((theme) => ({
  wooNextCartWrapper: {
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  buttonCheckout: {
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '15px',
    paddingBottom: '20px',
  },
  cartTotal: {
    background: 'rgb(231, 235, 240)',
    marginTop: '30px',
  },
  tableCart: {
    paddingRight: '50px',
  },
  buttonContinue: {
    marginTop: '20px',
  },
  cartTotalLeft: {
    paddingTop: '16px',
  },
}))

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
})
const CartItemsContainer = () => {
  // @TODO wil use it in future variations of the project.
  const [cart, setCart] = useContext(AppContext)
  //console.warn(cart);
  //const [requestError, setRequestError] = useState(null);

  // Get Cart Data.
  // const { loading, error, data, refetch } = useQuery(GET_CART, {
  //     notifyOnNetworkStatusChange: true,
  //     onCompleted: () => {

  //         // Update cart in the localStorage.
  //         const updatedCart = getFormattedCart(data);
  //         localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

  //         // Update cart data in React Context.
  //         setCart(updatedCart);
  //     }
  // });

  // Update Cart Mutation.
  // const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation(UPDATE_CART, {
  //     onCompleted: () => {
  //         refetch();
  //     },
  //     onError: (error) => {
  //         if (error) {
  //             const errorMessage = error?.graphQLErrors?.[0]?.message ? error.graphQLErrors[0].message : '';
  //             setRequestError(errorMessage);
  //         }
  //     }
  // });

  // Update Cart Mutation.
  // const [clearCart, { data: clearCartRes, loading: clearCartProcessing, error: clearCartError }] = useMutation(CLEAR_CART_MUTATION, {
  //     onCompleted: () => {
  //         refetch();
  //     },
  //     onError: (error) => {
  //         if (error) {
  //             const errorMessage = !isEmpty(error?.graphQLErrors?.[0]) ? error.graphQLErrors[0]?.message : '';
  //             setRequestError(errorMessage);
  //         }
  //     }
  // });

  /*
   * Handle remove product click.
   *
   * @param {Object} event event
   * @param {Integer} Product Id.
   *
   * @return {void}
   */
  const handleRemoveProductClick = (event, productId) => {
    const updatedCart = removeItemFromCart(productId)

    setCart(updatedCart)
  }
  // Clear the entire cart.
  // const handleClearCart = (event) => {

  //     event.stopPropagation();

  //     if (clearCartProcessing) {
  //         return;
  //     }

  //     clearCart({
  //         variables: {
  //             input: {
  //                 clientMutationId: v4(),
  //                 all: true
  //             }
  //         },
  //     });
  // }
  const router = useRouter()
  const classes = useStyles_cart()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }
  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: 'admin123',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.email == 'admin@gmail.com' && values.password == 'admin123') {
        router.push('/checkout')
      } else {
        alert('Wrong user')
      }
    },
  })
  return (
    <div className={classes.cartMain}>
      {cart ? (
        <div className={classes.wooNextCartWrapper}>
          <Grid item lg={8}>
            <Box className={classes.tableCart}>
              <TableContainer className="table table-hover">
                <Table>
                  <TableHead>
                    <TableRow className={classes.cartheadercontainer}>
                      <TableCell
                        className={classes.woo_next_cart_heading}
                        scope="col"
                      >
                        <Typography component="h6" variant="h6">
                          {' '}
                          Delete
                        </Typography>
                      </TableCell>
                      <TableCell
                        className={classes.woo_next_cart_heading}
                        scope="col"
                      >
                        <Typography component="h6" variant="h6">
                          Product{' '}
                        </Typography>
                      </TableCell>
                      <TableCell
                        className={classes.woo_next_cart_heading}
                        scope="col"
                      />
                      <TableCell
                        className={classes.woo_next_cart_heading}
                        scope="col"
                      >
                        <Typography component="h6" variant="h6">
                          Price
                        </Typography>
                      </TableCell>
                      <TableCell
                        className={classes.woo_next_cart_heading}
                        scope="col"
                      >
                        <Typography component="h6" variant="h6">
                          Quantity
                        </Typography>
                      </TableCell>
                      <TableCell
                        className={classes.woo_next_cart_heading}
                        scope="col"
                      >
                        <Typography component="h6" variant="h6">
                          Total
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart?.products?.length &&
                      cart.products.map((item) => (
                        <CartItem
                          key={item.productId}
                          item={item}
                          handleRemoveProductClick={handleRemoveProductClick}
                          setCart={setCart}
                        />
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider />
              <Box className={classes.buttonContinue}>
                <Link href="/shop">
                  <Button variant="contained">CONTINUE SHOPPING</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className={classes.cartTotalLeft}>
              <Typography component="h5" variant="h5">
                Cart Total
              </Typography>
              <Paper className={classes.cartTotal}>
                <List>
                  <ListItem>
                    <ListItemText>Subtotal:</ListItemText>
                    <Typography>${cart.totalProductsPrice}</Typography>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText>Shipping:</ListItemText>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="FreeShipping"
                        />
                      </RadioGroup>
                    </FormControl>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Clock Shop:</ListItemText>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Flat Rate"
                        />
                      </RadioGroup>
                    </FormControl>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText>Total:</ListItemText>
                    <Typography>${cart.totalProductsPrice}</Typography>
                  </ListItem>
                </List>
                <Box className={classes.buttonCheckout}>
                  {/*Proceeed to checkout */}

                  <Button variant="contained" onClick={handleOpen}>
                    Proceeed to checkout
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography component="h4" variant="h4">
                        Login
                      </Typography>
                      <form onSubmit={formik.handleSubmit}>
                        <Typography
                          sx={{ marginBottom: '15px', marginTop: '20px' }}
                        >
                          Username or email address *
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="email"
                          name="email"
                          label="Email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                        <Typography
                          sx={{ marginBottom: '15px', marginTop: '20px' }}
                        >
                          Password *
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="password"
                          name="password"
                          label="Password"
                          type="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                        />

                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                          sx={{
                            marginTop: '20px',
                            borderRadius: '25px',
                            width: '100px',
                          }}
                        >
                          Login
                        </Button>
                      </form>
                    </Box>
                  </Modal>
                </Box>

                {/* <Link href="/checkout">
                                    <Button variant="contained">UPDATE CART</Button>
                                </Link> */}
              </Paper>
            </Box>
          </Grid>
          {/* Display Errors if any */}
          {/* {requestError ? <div className="row woo-next-cart-total-container mt-5"> {requestError} </div> : ''} */}
        </div>
      ) : (
        <div className="container mx-auto my-32 px-4 xl:px-0">
          <h2 className="text-2xl mb-5">No items in the cart</h2>
          <Link href="/">
            <Button variant="contained">Add New Products</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartItemsContainer
