import * as React from 'react'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { AppContext } from '../../../lib/context/AppContext'
import CartItem from './Cartitem'
import { removeItemFromCart } from '../../../function'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FaAngleDoubleLeft } from 'react-icons/fa'

import {
  Container,
  Box,
  Button,
  Table,
  Flex,
  Center,
  Text,
  ListItem,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Heading,
  Radio,
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
    <Center>
      {cart ? (
        <Box>
          <Flex direction={['column', 'column', 'column', 'row']}>
            <TableContainer
              width={{ sm: '100%', md: '100%', lg: '100%', xl: '75%' }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>
                      <Text component="h6" variant="h6">
                        Delete
                      </Text>
                    </Th>
                    <Th>
                      <Text component="h6" variant="h6">
                        Product
                      </Text>
                    </Th>
                    <Th />
                    <Th>
                      <Text component="h6" variant="h6">
                        Price
                      </Text>
                    </Th>
                    <Th>
                      <Text component="h6" variant="h6">
                        Quantity
                      </Text>
                    </Th>
                    <Th>
                      <Text component="h6" variant="h6">
                        Total
                      </Text>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart.products.length &&
                    cart.products.map((item) => (
                      <CartItem
                        key={item.productId}
                        item={item}
                        handleRemoveProductClick={handleRemoveProductClick}
                        setCart={setCart}
                      />
                    ))}
                </Tbody>
                <Box pt="6">
                  <Link href="/shop">
                    <Button
                      as="a"
                      leftIcon={<FaAngleDoubleLeft />}
                      bg="brand.primary"
                      color="#fff"
                      onClick={handleOpen}
                      w="100%"
                      borderRadius="50px"
                      _hover={{
                        bg: 'rgb(56,172,221)',
                      }}
                    >
                      CONTINUE SHOPPING
                    </Button>
                  </Link>
                </Box>
              </Table>
            </TableContainer>
            <Box width={{ sm: '90%', md: '90%', lg: '90%', xl: '25%' }} pl="6">
              <Box pt="16px">
                <Heading as="h3" size="lg" component="h5" variant="h5">
                  Cart Total
                </Heading>
                <Box bg="#edf0f5" mt="30px" pl="4" pt="6" pr="4">
                  <Flex
                    justifyContent="space-between"
                    borderBottom="1px solid #e4e4e4"
                    pb="4"
                  >
                    <Heading as="h5" size="sm">
                      Subtotal
                    </Heading>
                    <Text>${cart.totalProductsPrice}</Text>
                  </Flex>
                  <Flex pt="6" justifyContent="space-between">
                    <Text>Shipping:</Text>
                    <Radio> FreeShipping</Radio>
                  </Flex>
                  <Flex pt="4" justifyContent="space-between">
                    <Text>Clock Shop:</Text>
                    <Radio> Flat Rate</Radio>
                  </Flex>
                  <Flex pt="4" justifyContent="space-between">
                    <Text>Total:</Text>
                    <Text>${cart.totalProductsPrice}</Text>
                  </Flex>
                  <Box textAlign="center" pt="6" mb="15px" pb="5" pb="6">
                    {/*Proceeed to checkout */}
                    <Button
                      bg="brand.primary"
                      color="#fff"
                      onClick={handleOpen}
                      w="100%"
                      _hover={{
                        bg: 'rgb(56,172,221)',
                      }}
                    >
                      Proceeed to checkout
                    </Button>
                  </Box>
                  {/* <Link href="/checkout">
                                    <Button variant="contained">UPDATE CART</Button>
                                </Link> */}
                </Box>
              </Box>
            </Box>
          </Flex>
          {/* Display Errors if any */}
          {/* {requestError ? <div style="row woo-next-cart-total-container mt-5"> {requestError} </div> : ''} */}
        </Box>
      ) : (
        <Box>
          <h2>No items in the cart</h2>
          <Link href="/">
            <Button variant="contained">Add New Products</Button>
          </Link>
        </Box>
      )}
    </Center>
  )
}
export default CartItemsContainer
