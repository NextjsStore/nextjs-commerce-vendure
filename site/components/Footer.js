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
                  <Link href="#">
                    <a>contact@yourdomain.com</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoGlobe />
                  <Link href="#">
                    <a>http://yourdomain.com</a>
                  </Link>
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
                      color="#666"
                      border="1px solid #666"
                      m="10"
                    >
                      <Link href="#">
                        <a>
                          <BsTwitter />
                        </a>
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
                        <a>
                          <AiFillLinkedin />
                        </a>
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
                        <a>
                          <AiOutlineGoogle />
                        </a>
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
                  <Link href="#">
                    <a>New Product</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Best Seller</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Feature Product</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Deal off day</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Handcrafted, Artisan Jewelry</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Jewelry Boxes & Organizers</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Jewelry Design & Repair</a>
                  </Link>
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
                  <Link href="/myaccount">
                    <a>My account</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="/orders">
                    <a>Order History</a>
                  </Link>
                </Box>
                <Box pb="10">
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Other</a>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box w="25%">
              <Heading as="h3" size="lg">
                Working Time
              </Heading>
              <Box color="#666">
                <p>Mon to Fri:8:30 am - 6:00 pm</p>
                <p>Sat and Sun:10:00 am – 5:00 pm</p>
              </Box>

              <Box
                p={4}
                w="100%"
                color="#666"
                backgroundImage="/assets/imgWorking.jpg"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="100%"
                centerContent
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
