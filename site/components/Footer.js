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
  Center,
  Heading,
  HStack,
  Box,
  Circle,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Center>
        <Container>
          <Flex>
            <Box w="25%">
              <Heading as="h3" size="lg">
                Contact us
              </Heading>
              <Box color="#666">
                <Box pb="10">
                  <AiFillHome p="10" />
                  PO Box CT16122 Collins Street West, Victoria 8007, Australia.
                </Box>
                <Box pb="10">
                  <MdPhone />
                  +1 (2) 345 6789
                </Box>
                <Box pb="10">
                  <MdEmail />
                  <Link href="#">contact@yourdomain.com</Link>
                </Box>
                <Box pb="10">
                  <GoGlobe />
                  <Link href="#">http://yourdomain.com</Link>
                </Box>
                <Flex>
                  <HStack>
                    <Circle
                      size="40px"
                      bg="#fff"
                      color="#666"
                      border="1px solid #666"
                    >
                      <Link href="facebook.com/">
                        <FaFacebookF />
                      </Link>
                    </Circle>
                  </HStack>
                  <HStack>
                    <Circle
                      size="40px"
                      bg="#fff"
                      color="#666"
                      border="1px solid #666"
                      m="10"
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
                      color="#666"
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
                      color="#666"
                      border="1px solid #666"
                      m="10"
                    >
                      <Link href="#">
                        <AiOutlineGoogle />
                      </Link>
                    </Circle>
                  </HStack>
                </Flex>
              </Box>
            </Box>
            <Box w="25%">
              <Heading as="h3" size="lg">
                Information
              </Heading>
              <Box color="#666">
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">New Product</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Best Seller</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Feature Product</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Deal off day</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Handcrafted, Artisan Jewelry</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Jewelry Boxes & Organizers</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Jewelry Design & Repair</Link>
                </Box>
              </Box>
            </Box>
            <Box w="25%">
              <Heading as="h3" size="lg">
                My account
              </Heading>
              <Box color="#666">
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="/myaccount">My account</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="/orders">Order History</Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">Other</Link>
                </Box>
              </Box>
            </Box>
            <Box w="25%">
              <Heading as="h3" size="lg">
                Working Time
              </Heading>
              <Box color="#666">
                Mon to Fri:8:30 am - 6:00 payment Sat and Sun:10:00 am – 5:00 pm
              </Box>
              <Box
                p={4}
                w="100%"
                color="#666"
                backgroundImage="/assets/imgWorking.jpg"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="100%"
                borderRadius="10"
              >
                <Container centerContent color="#fff" pt="30" pb="30">
                  <MdFavorite size={25} color="red" />
                  <span>Time In Works </span>
                  We 8:30 am - 6:00 pm
                </Container>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Center>
    </>
  )
}
export default Footer
