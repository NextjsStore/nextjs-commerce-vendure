import React from 'react'
import Link from 'next/link'
import { AiFillHome, AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai'
import { MdPhone, MdEmail, MdFavorite } from 'react-icons/md'
import { GoGlobe, GoPrimitiveDot } from 'react-icons/go'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'
import {
  Container,
  Flex,
  Text,
  Heading,
  HStack,
  Box,
  Circle,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container w="1200px" m="12px auto">
      <Flex>
        <Box w="25%" color="#323232">
          <Heading as="h3" size="lg">
            Contact us
          </Heading>
          <Box color="#666">
            <Box pb="10">
              <Flex>
                <Box>
                  <AiFillHome />
                </Box>
                <Box pl="10px">
                  PO Box CT16122 Collins Street West, Victoria 8007, Australia.
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <MdPhone />
                </Box>
                <Box pl="10px">+1 (2) 345 6789</Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <MdEmail />
                </Box>
                <Box pl="10px">
                  <Link href="#" pl="10px">
                    contact@yourdomain.com
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoGlobe />
                </Box>
                <Box pl="10px">
                  <Link href="#">http://yourdomain.com</Link>
                </Box>
              </Flex>
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
          <Heading as="h3" size="lg" color="#323232">
            Information
          </Heading>
          <Box color="#666">
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">New Product</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Best Seller</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Feature Product</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Deal off day</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Handcrafted, Artisan Jewelry</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Jewelry Boxes & Organizers</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Jewelry Design & Repair</Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box w="25%">
          <Box color="#323232">
            <Heading as="h3" size="lg">
              My account
            </Heading>
          </Box>
          <Box color="#666">
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">My account</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Order History</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="10">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="10px">
                  <Link href="#">Other</Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box w="25%" color="#323232">
          <Heading as="h3" size="lg">
            Working Time
          </Heading>
          <Box color="#666">
            <Text>Mon to Fri:8:30 am - 6:00 payment</Text>
            <Text>Sat and Sun:10:00 am – 5:00 pm</Text>
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
  )
}
export default Footer
