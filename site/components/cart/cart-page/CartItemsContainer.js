import * as React from 'react'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AppContext } from '../../../lib/context/AppContext'
import CartItem from './Cartitem'
import { removeItemFromCart } from '../../../function'
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
} from '@chakra-ui/react'

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
    <>
      <Container>
        <Center>
          {cart ? (
            <div>
              <Box pr="50px">
                <Flex styles="table table-hover">
                  <Grid>
                    <Table>
                      <tr>
                        <th>
                          <Text component="h6" variant="h6">
                            Delete
                          </Text>
                        </th>
                        <th>
                          <Text component="h6" variant="h6">
                            Product
                          </Text>
                        </th>
                        <th />
                        <th>
                          <Text component="h6" variant="h6">
                            Price
                          </Text>
                        </th>
                        <th>
                          <Text component="h6" variant="h6">
                            Quantity
                          </Text>
                        </th>
                        <th>
                          <Text component="h6" variant="h6">
                            Total
                          </Text>
                        </th>
                      </tr>
                      <Table>
                        {cart.products.length &&
                          cart.products.map((item) => (
                            <CartItem
                              key={item.productId}
                              item={item}
                              handleRemoveProductClick={
                                handleRemoveProductClick
                              }
                              setCart={setCart}
                            />
                          ))}
                      </Table>
                      <Box pt="20">
                        <Link href="/shop">
                          <Button variant="contained" as="a">
                            CONTINUE SHOPPING
                          </Button>
                        </Link>
                      </Box>
                    </Table>
                  </Grid>
                  <Grid>
                    <Box pt="16px">
                      <Text component="h5" variant="h5">
                        Cart Total
                      </Text>
                      <Box bg="rgb(231, 235, 240)" mt="30px">
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
                        <Box textAlign="center" mt="10px" mb="15px" pb="20px">
                          <Button variant="contained" onClick={handleOpen}>
                            Proceeed to checkout
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Flex>
              </Box>
            </div>
          ) : (
            <div styles=" mx-auto my-32 px-4 xl:px-0">
              <h2 styles="text-2xl mb-5">No items in the cart</h2>
              <Link href="/">
                <Button variant="contained" as="a">
                  Add New Products
                </Button>
              </Link>
            </div>
          )}
        </Center>
      </Container>
    </>
  )
}
export default CartItemsContainer
