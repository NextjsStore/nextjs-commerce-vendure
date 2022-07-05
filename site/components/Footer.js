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
    <Container maxW="1200px" fontFamily="Merriweather">
      <Flex>
        <Box w="25%" color="#323232">
          <Heading as="h4" size="md" pb="6" fontFamily="Merriweather">
            Contact us
          </Heading>
          <Box color="#666">
            <Box pb="2">
              <Flex>
                <Box>
                  <AiFillHome />
                </Box>
                <Box pl="2">
                  PO Box CT16122 Collins Street West, Victoria 8007, Australia.
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <MdPhone />
                </Box>
                <Box pl="2">+1 (2) 345 6789</Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <MdEmail />
                </Box>
                <Box pl="2">
                  <Link href="#" pl="2">
                    contact@yourdomain.com
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
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
        <Box w="25%">
          <Heading
            as="h4"
            size="md"
            pb="6"
            color="#323232"
            fontFamily="Merriweather"
          >
            Information
          </Heading>
          <Box color="#666">
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">New Product</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Best Seller</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Feature Product</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Deal off day</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Handcrafted, Artisan Jewelry</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Jewelry Boxes & Organizers</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Jewelry Design & Repair</Link>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box w="25%">
          <Box color="#323232">
            <Heading as="h4" size="md" pb="6" fontFamily="Merriweather">
              My account
            </Heading>
          </Box>
          <Box color="#666">
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">My account</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
              <Flex>
                <Box>
                  <GoPrimitiveDot fontSize="10px" />
                </Box>
                <Box pl="2">
                  <Link href="#">Order History</Link>
                </Box>
              </Flex>
            </Box>
            <Box pb="2">
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
          <Heading as="h4" size="md" pb="6" fontFamily="Merriweather">
            Working Time
          </Heading>
          <Box color="#666">
            <Text>Mon to Fri:8:30 am - 6:00 payment</Text>
            <Text>Sat and Sun:10:00 am – 5:00 pm</Text>
          </Box>
          <Box
            mt="3"
            p={4}
            w="100%"
            color="#666"
            backgroundImage="/assets/imgWorking.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            borderRadius="10"
          >
            <Box color="#fff" pt="6" pb="6">
              <Center>
                <MdFavorite size={25} color="red" />
              </Center>
              <span>Time In Works </span>
              We 8:30 am - 6:00 pm
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
export default Footer
