import * as React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import {
  Center,
  Button,
  Container,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Checkbox,
  Input,
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

const MyAccount = () => {
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
      <Box h="240px">
        <Box>
          <Box
            color="#fff"
            backgroundImage="/assets/banner_page.png"
            h="200px"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            mb="60px"
          >
            <Flex>
              <Box>
                <Heading component="h3" variant="h3">
                  My account
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Heading component="h6" variant="h6">
                  Home
                </Heading>
                <Heading component="h6" variant="h6">
                  My account
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Center>
        <Container w="50%">
          <Flex>
            <Box>
              <Heading component="h4" variant="h4">
                Login
              </Heading>
              <form onSubmit={formik.handleSubmit}>
                <Text sx={{ marginBottom: '15px', marginTop: '20px' }}>
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
                />
                <Text sx={{ marginBottom: '15px', marginTop: '20px' }}>
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
                <Box>
                  <Checkbox control={<Checkbox defaultChecked />}>
                    Remember me
                  </Checkbox>
                  <Box>
                    <Text component="span" variant="span">
                      <a href="#"> Lost your password?</a>
                    </Text>
                  </Box>
                </Box>
              </form>
            </Box>
            <Spacer />
            <Box>
              <Box>
                <Heading component="h4" variant="h4">
                  Register
                </Heading>
                <form onSubmit={formik2.handleSubmit}>
                  <Text sx={{ marginBottom: '15px', marginTop: '20px' }}>
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
                    error={
                      formik2.touched.email && Boolean(formik2.errors.email)
                    }
                    helperText={formik2.touched.email && formik2.errors.email}
                  />
                  <Text sx={{ marginBottom: '15px', marginTop: '20px' }}>
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
                      formik2.touched.password &&
                      Boolean(formik2.errors.password)
                    }
                    helperText={
                      formik2.touched.password && formik2.errors.password
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
                    Register
                  </Button>
                </form>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Center>
    </Box>
  )
}
export default MyAccount
