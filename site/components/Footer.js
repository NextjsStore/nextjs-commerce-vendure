import React from 'react'
import Link from 'next/link'
import { AiFillHome, AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai'
import { MdPhone, MdEmail, MdFavorite } from 'react-icons/md'
import { GoGlobe, GoPrimitiveDot } from 'react-icons/go'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import {
  Container,
  Flex,
  Text,
  Heading,
  HStack,
  Box,
  Circle,
  Center,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container
      maxW={{
        md: '768px',
        lg: '960px',
        xl: '1200px',
      }}
      h={{ base: '100%', sm: '100%', md: '350px' }}
      display="flex"
      alignItems="flex-end"
    >
      <Box display={{ base: 'block', sm: 'block', md: 'flex' }}>
        <Box
          w={{ base: '50%', sm: '50%', md: '50%', xl: '25%' }}
          color="#323232"
          pr="6"
        >
          <Heading as="h4" size="md" pb="6" fontFamily="Merriweather">
            Contact us
          </Heading>
          <Box color="brand.footer" fontSize="14">
            <Box pb="4">
              <Flex>
                <Box pt="1">
                  <AiFillHome />
                </Box>
                <Box pl="2">
                  PO Box CT16122 Collins Street West, Victoria 8007, Australia.
                </Box>
              </Flex>
            </Box>
            <Box pb="4">
              <Flex>
                <Box pt="1">
                  <MdPhone />
                </Box>
                <Box pl="2">+1 (2) 345 6789</Box>
              </Flex>
            </Box>
            <Box pb="4">
              <Flex>
                <Box pt="1">
                  <MdEmail />
                </Box>
                <Box pl="2">
                  <Link href="#" pl="2">
                    contact@yourdomain.com
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="4">
              <Flex>
                <Box pt="1">
                  <GoGlobe />
                </Box>
                <Box pl="2">
                  <Link href="#">http://yourdomain.com</Link>
                </Box>
              </Flex>
            </Box>
            <Flex>
              <HStack>
                <Circle
                  size="40px"
                  bg="#fff"
                  color="brand.footer"
                  border="1px solid #666"
                >
                  <Link href="facebook.com/">
                    <a>
                      <FaFacebookF />
                    </a>
                  </Link>
                </Circle>
              </HStack>
              <HStack>
                <Circle
                  size="40px"
                  bg="#fff"
                  color="brand.footer"
                  border="1px solid #666"
                  m="3"
                >
                  <Link href="#">
                    <BsTwitter />
                  </Link>
                </Circle>
              </HStack>
              <HStack>
                <Circle
                  size="40px"
                  bg="#fff"
                  color="brand.footer"
                  border="1px solid #666"
                >
                  <Link href="#">
                    <AiFillLinkedin />
                  </Link>
                </Circle>
              </HStack>
              <HStack>
                <Circle
                  size="40px"
                  bg="#fff"
                  color="brand.footer"
                  border="1px solid #666"
                  m="3"
                >
                  <Link href="#">
                    <AiOutlineGoogle />
                  </Link>
                </Circle>
              </HStack>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: '50%', sm: '50%', md: '50%', xl: '25%' }} pr="6">
          <Heading
            as="h4"
            size="md"
            pb="6"
            color="#323232"
            fontFamily="Merriweather"
          >
            Information
          </Heading>
          <Box color="brand.footer" fontSize="14">
            <Box pb="4">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">New Product</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Best Seller</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Feature Product</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Deal off day</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Handcrafted, Artisan Jewelry</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Jewelry Boxes & Organizers</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Jewelry Design & Repair</Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box w={{ base: '50%', sm: '50%', md: '50%', xl: '25%' }} pr="6">
          <Box color="#323232">
            <Heading as="h4" size="md" pb="6" fontFamily="Merriweather">
              My account
            </Heading>
          </Box>
          <Box color="brand.footer" fontSize="14">
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">My account</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Order History</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box pt="1">
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Other</Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box
          w={{ base: '50%', sm: '50%', md: '50%', xl: '25%' }}
          color="#323232"
          pr="6"
        >
          <Heading as="h4" size="md" pb="6" fontFamily="Merriweather">
            Working Time
          </Heading>
          <Box color="brand.footer" fontSize="14">
            <Text>Mon to Fri:8:30 am - 6:00 payment</Text>
            <Text>Sat and Sun:10:00 am – 5:00 pm</Text>
          </Box>
          <Box
            mt="3"
            p={4}
            w="100%"
            color="brand.footer"
            backgroundImage="/assets/imgWorking.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            borderRadius="10"
          >
            <Box color="#fff" pt="6" pb="6" textAlign="center">
              <Center>
                <MdFavorite size={25} color="red" />
              </Center>
              <span>Time In Works </span>
              We 8:30 am - 6:00 pm
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export default Footer
