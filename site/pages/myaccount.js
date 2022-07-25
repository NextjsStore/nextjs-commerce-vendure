import * as React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import {
  Button,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Checkbox,
  Input,
} from '@chakra-ui/react'
import commerce from '@lib/api/commerce'

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

const MyAccount = (props) => {
  const { categories } = props
  const router = useRouter()
  const [checked, setChecked] = React.useState(false)
  const [isChecked, setStatusChecked] = React.useState(false)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  const handleOnclickShow = () => {
    setStatusChecked((item) => true)
  }
  const handleOnclickHidden = () => {
    setStatusChecked((item) => false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: 'admin123',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.email == 'admin@gmail.com' && values.password == 'admin123') {
        router.push('/profile')
      } else {
        alert('Wrong user')
      }
    },
  })
  const formik2 = useFormik({
    initialValues: {
      email: 'youremail@gmail.com',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.email == 'admin@gmail.com' && values.password == 'admin123') {
        router.push('/profile')
      } else {
        alert('Wrong user')
      }
    },
  })

  return (
    <Box>
      <Box>
        <Box
          color="#fff"
          backgroundImage="/assets/banner_page.png"
          h="200px"
          mb="6"
        >
          <Flex
            maxW={{
              md: '768px',
              lg: '960px',
              xl: '1200px',
            }}
            m="0px auto"
          >
            <Box>
              <Heading fontSize="40" variant="h1" lineHeight="200px">
                My Account
              </Heading>
            </Box>
            <Spacer />
            <Box lineHeight="200px">
              <Flex>
                <Text component="h6" variant="h6">
                  Home
                </Text>
                <Text p="0px 10px"> / </Text>
                <Text component="h6" variant="h6">
                  My Account
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        maxW={{
          md: '768px',
          lg: '960px',
          xl: '1200px',
        }}
        m="60px auto"
        border="1px solid #ccc"
      >
        <Flex m="5" direction={['column', 'column', 'row', 'row']}>
          <Box w={{ sm: '100%', md: '50%' }}>
            <Heading
              fontFamily="Merriweather"
              as="h2"
              size="xl"
              color="brand.title"
              pb="4"
            >
              Login
            </Heading>
            <form onSubmit={formik.handleSubmit}>
              <Text mt="4" mb="4">
                Username or email address *
              </Text>
              <Input
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                w="90%"
                border="1px solid #ccc"
              />
              <Text mt="4" mb="4">
                Password *
              </Text>
              <Input
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                w="90%"
                border="1px solid #ccc"
              />
              <Box>
                <Button
                  bg="brand.blue"
                  type="submit"
                  color="#fff"
                  mt="5"
                  borderRadius="25px"
                  w="100px"
                  mb="5"
                >
                  Login
                </Button>
              </Box>
              <Box>
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Box>
                  <Text component="span" variant="span">
                    <a href="#"> Lost your password?</a>
                  </Text>
                </Box>
              </Box>
            </form>
          </Box>
          <Box w={{ sm: '100%', md: '50%' }} pt={{ sm: '6', md: '0' }}>
            <Heading
              fontFamily="Merriweather"
              as="h2"
              size="xl"
              color="brand.title"
              pb="4"
            >
              Register
            </Heading>
            <form onSubmit={formik2.handleSubmit}>
              <Text mt="4" mb="4">
                Username or email address *
              </Text>
              <Input
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik2.values.email}
                onChange={formik2.handleChange}
                error={formik2.touched.email && Boolean(formik2.errors.email)}
                helperText={formik2.touched.email && formik2.errors.email}
                w="90%"
                border="1px solid #ccc"
              />
              <Text mt="4" mb="4">
                Password *
              </Text>
              <Input
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik2.values.password}
                onChange={formik2.handleChange}
                error={
                  formik2.touched.password && Boolean(formik2.errors.password)
                }
                helperText={formik2.touched.password && formik2.errors.password}
                w="90%"
                p="18.5px 14px"
                border="1px solid #ccc"
              />
              <Button
                bg="brand.blue"
                type="submit"
                color="#fff"
                mt="5"
                borderRadius="25px"
                w="100px"
                p="10px 0"
              >
                Register
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
export default MyAccount

export async function getStaticProps({ preview, locale, locales }) {
  const config = { locale, locales }

  const siteInfoPromise = commerce.getSiteInfo({ config, preview })

  const { categories } = await siteInfoPromise

  return {
    props: {
      categories,
    },
    revalidate: 60,
  }
}
