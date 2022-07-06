import * as React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAddLocation, MdEmail } from 'react-icons/md'
import {
  Box,
  Container,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  Textarea,
  Input,
  Stack,
  Circle,
} from '@chakra-ui/react'
import commerce from '@lib/api/commerce'

const ContactUS = (props) => {
  const { categories } = props
  return (
    <Box pb="20">
      <Box>
        <Box
          color="#fff"
          backgroundImage="/assets/banner_page.png"
          h="200px"
          mb="6"
        >
          <Flex w="1200px" m="0px auto">
            <Box>
              <Heading fontSize="40" variant="h1" lineHeight="200px">
                Contact
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
                  Contact
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Container maxW="1200px" m="0px auto">
        <Flex>
          <Box w="50%">
            <Heading
              fontFamily="Merriweather"
              as="h2"
              size="xl"
              color="brand.title"
              pb="6"
            >
              Contact us
            </Heading>
            <Box display="block">
              <Stack width="100%" pr="6">
                <Input type="text" name="name" placeholder="Name*" />
                <Input type="text" name="email" placeholder="Your Email*" />
                <Input type="text" name="Subject" placeholder="Subject" />
                <Textarea name="your-message" placeholder="Message"></Textarea>
              </Stack>
              <Box>
                <Button
                  bg="brand.blue"
                  color="#fff"
                  mt="20px"
                  borderRadius="25px"
                  p="15px 100px"
                >
                  SUBMIT NOW
                </Button>
              </Box>
            </Box>
          </Box>
          <Box w="50%" fontFamily="Merriweather" fontSize="20">
            <Heading
              fontFamily="Merriweather"
              as="h2"
              size="xl"
              color="brand.title"
              pb="6"
            >
              Location
            </Heading>
            <Box display="flex">
              <Circle
                size="60px"
                color="brand.blue"
                border="1px solid rgb(25, 118, 210)"
              >
                <BsFillTelephoneFill fontSize="20" />
              </Circle>
              <Text pl="10"> 0-800-12-345-6 880</Text>
            </Box>
            <Box display="flex" pt="5">
              <Circle
                size="60px"
                color="brand.blue"
                border="1px solid rgb(25, 118, 210)"
              >
                <MdAddLocation fontSize="20" />
              </Circle>
              <Text pl="10"> 257 Charlington Gates Road Morrison, Nr. 568</Text>
            </Box>
            <Box display="flex" pt="5">
              <Circle
                size="60px"
                color="brand.blue"
                border="1px solid rgb(25, 118, 210)"
              >
                <MdEmail fontSize="20" />
              </Circle>
              <Text pl="10"> info@jruitstemplate.com</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
export default ContactUS

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
