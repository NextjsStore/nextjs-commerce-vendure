import * as React from 'react'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AppContext } from '../../../lib/context/AppContext'
import CartItem from './Cartitem'
import { removeItemFromCart } from '../../../function'
// import Modal from '@mui/material/Modal'
// import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Container,
  Box,
  Button,
  Table,
  Flex,
  Center,
  Grid,
  Text,
  List,
  ListItem,
  TableContainer,
} from '@chakra-ui/react'

const styles = {
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
}

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
    <Container styles={styles.cartMain}>
      <Center>
        {cart ? (
          <div styles={styles.wooNextCartWrapper}>
            <Box styles={styles.tableCart}>
              <Flex styles="table table-hover">
                <Grid>
                  <Table>
                    <tr styles={styles.cartheadercontainer}>
                      <th styles={styles.woo_next_cart_heading}>
                        <Text component="h6" variant="h6">
                          Delete
                        </Text>
                      </th>
                      <th styles={styles.woo_next_cart_heading}>
                        <Text component="h6" variant="h6">
                          Product
                        </Text>
                      </th>
                      <th styles={styles.woo_next_cart_heading} />
                      <th styles={styles.woo_next_cart_heading}>
                        <Text component="h6" variant="h6">
                          Price
                        </Text>
                      </th>
                      <th styles={styles.woo_next_cart_heading}>
                        <Text component="h6" variant="h6">
                          Quantity
                        </Text>
                      </th>
                      <th styles={styles.woo_next_cart_heading}>
                        <Text component="h6" variant="h6">
                          Total
                        </Text>
                      </th>
                    </tr>
                    <Table>
                      {cart?.products?.length &&
                        cart.products.map((item) => (
                          <CartItem
                            key={item.productId}
                            item={item}
                            handleRemoveProductClick={handleRemoveProductClick}
                            setCart={setCart}
                          />
                        ))}
                    </Table>
                    <Box styles={styles.buttonContinue}>
                      <Link href="/shop">
                        <Button variant="contained">CONTINUE SHOPPING</Button>
                      </Link>
                    </Box>
                  </Table>
                </Grid>
                <Grid>
                  <Box styles={styles.cartTotalLeft}>
                    <Text component="h5" variant="h5">
                      Cart Total
                    </Text>
                    <Box styles={styles.cartTotal}>
                      <List>
                        <Box>
                          <Text>Subtotal:</Text>
                          <Text>${cart.totalProductsPrice}</Text>
                        </Box>
                        <Box>
                          <Text>Shipping:</Text>
                          <Box>nut Radio: FreeShipping</Box>
                        </Box>
                        <ListItem>
                          <Text>Clock Shop:</Text>
                          <Box>nut Radio: Flat Rate</Box>
                        </ListItem>
                        <ListItem>
                          <Text>Total:</Text>
                          <Text>${cart.totalProductsPrice}</Text>
                        </ListItem>
                      </List>
                      <Box styles={styles.buttonCheckout}>
                        {/*Proceeed to checkout */}

                        <Button variant="contained" onClick={handleOpen}>
                          Proceeed to checkout
                        </Button>
                        {/* <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Center h="100%">
                            <Box bg="#fff" w="400px" mx="auto" p="50px">
                              <Text component="h4" variant="h4">
                                Login
                              </Text>
                              <form onSubmit={formik.handleSubmit}>
                                <Text
                                  sx={{
                                    marginBottom: '15px',
                                    marginTop: '20px',
                                  }}
                                >
                                  Username or email address *
                                </Text>
                                <TextField
                                  variant="outlined"
                                  fullWidth
                                  id="email"
                                  name="email"
                                  label="Email"
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                  }
                                  helperText={
                                    formik.touched.email && formik.errors.email
                                  }
                                />
                                <Text
                                  sx={{
                                    marginBottom: '15px',
                                    marginTop: '20px',
                                  }}
                                >
                                  Password *
                                </Text>
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
                                    formik.touched.password &&
                                    formik.errors.password
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
                          </Center>
                        </Modal> */}
                      </Box>

                      {/* <Link href="/checkout">
                                    <Button variant="contained">UPDATE CART</Button>
                                </Link> */}
                    </Box>
                  </Box>
                </Grid>
              </Flex>
            </Box>

            {/* Display Errors if any */}
            {/* {requestError ? <div style="row woo-next-cart-total-container mt-5"> {requestError} </div> : ''} */}
          </div>
        ) : (
          <div styles="container mx-auto my-32 px-4 xl:px-0">
            <h2 styles="text-2xl mb-5">No items in the cart</h2>
            <Link href="/">
              <Button variant="contained">Add New Products</Button>
            </Link>
          </div>
        )}
      </Center>
    </Container>
  )
}

export default CartItemsContainer
