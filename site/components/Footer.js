import React from 'react'
import Link from 'next/link'

// add font
import { AiFillHome, AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai'
import { MdPhone, MdEmail, MdFavorite } from 'react-icons/md'
import { GoGlobe, GoPrimitiveDot } from 'react-icons/go'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import {
  Container,
  Flex,
  Center,
  Heading,
  Image,
  Text,
  Box,
} from '@chakra-ui/react'
// import { Box } from '@chakra-ui/core'
// makestyle
import { makeStyles } from '@material-ui/core/styles'

// import images

const useStyle_footer = makeStyles({
  // footer_main: {
  //   backgroundColor: '#fff',
  //   paddingTop: '45px',
  //   paddingBottom: '8px',
  // },
  // title_f: {
  //   fontSize: '16px',
  //   fontWeight: 'bold',
  //   margin: '10px 0px 14px 0px',
  //   borderBottom: 'none',
  //   paddingBottom: '0px',
  //   fontFamily: 'Merriweather',
  //   color: `${colorHeading}`,
  // },
  // address_f: {
  //   listStyle: 'none',
  //   padding: '0px',
  //   margin: '0px 0px 15px 0px',
  //   '& Box': {
  //     padding: '8px 0px',
  //     marginBottom: '3px',
  //     borderBottom: 'none',
  //     color: `${colorDefaul}`,
  //     '&:first-child': {
  //       paddingRight: '30px',
  //     },
  //     '& svg': {
  //       fontSize: '16px',
  //       color: `${colorDefaul}`,
  //       marginRight: '15px',
  //     },
  //     '& a': {
  //       color: `${colorDefaul}`,
  //       '&:hover': {
  //         color: `${colorHover}`,
  //       },
  //     },
  //   },
  // },
  // social_f: {
  //   listStyle: 'none',
  //   padding: '0px',
  //   margin: '0px',
  //   float: 'left',
  //   '& Box': {
  //     display: 'inline-flex',
  //     padding: '0px',
  //     margin: '0px',
  //     '& a': {
  //       width: 40,
  //       height: 40,
  //       display: 'inline-flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       marginRight: '15px',
  //       borderRadius: '50%',
  //       transition: '0.35s',
  //       border: '1px solid #666',
  //       '& svg': {
  //         fontSize: ' 16px',
  //         color: `${colorDefaul}`,
  //       },
  //       '&:hover': {
  //         borderColor: `${colorHover}`,
  //         backgroundColor: `${colorHover}`,
  //         '& svg': {
  //           color: '#fff',
  //         },
  //       },
  //     },
  //   },
  // },
  // menu_footer: {
  //   listStyle: 'none',
  //   padding: '0px',
  //   margin: '0px',
  //   '& Box': {
  //     display: 'flex',
  //     alignItems: 'center',
  //     lineHeight: '30px',
  //     '& svg': {
  //       fontSize: '8px',
  //       marginRight: '15px',
  //       color: `${colorDefaul}`,
  //     },
  //     '& a': {
  //       color: `${colorDefaul}`,
  //       fontSize: '16px',
  //       '&:hover': {
  //         color: `${colorHover}`,
  //       },
  //     },
  //   },
  // },
  // descWorking: {
  //   color: `${colorDefaul}`,
  //   fontSize: '16px',
  //   '& span': {
  //     display: 'block',
  //     lineHeight: '30px',
  //   },
  // },
  // boxWorking: {
  //   backgroundImage: `url(${imgWorking.src})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   minHeight: '160px',
  //   width: ' 100%',
  //   borderRadius: '10px',
  //   marginTop: '10px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   color: '#fff',
  //   fontSize: '16px',
  //   '& svg': {
  //     color: '#fe7fa9',
  //     marginTop: '10px',
  //   },
  // },
})
const Footer = () => {
  const classes = useStyle_footer()
  const isImage = require('../assets/imgWorking.png')
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
                <Box>
                  <AiFillHome />
                  PO Box CT16122 Collins Street West, Victoria 8007, Australia.
                </Box>
                <Box>
                  <MdPhone />
                  +1 (2) 345 6789
                </Box>
                <Box>
                  <MdEmail />
                  <Link href="#">
                    <a>contact@yourdomain.com</a>
                  </Link>
                </Box>
                <Box>
                  <GoGlobe />
                  <Link href="#">
                    <a>http://yourdomain.com</a>
                  </Link>
                </Box>
                <Flex>
                  <Box>
                    <Link href="facebook.com/">
                      <a>
                        <BsFacebook />
                      </a>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="#">
                      <a>
                        <BsTwitter />
                      </a>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="#">
                      <a>
                        <AiFillLinkedin />
                      </a>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="#">
                      <a>
                        <AiOutlineGoogle />
                      </a>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box w="25%">
              <Heading as="h3" size="lg">
                Information
              </Heading>
              <Box color="#666">
                <Box>
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>New Product</a>
                  </Link>
                </Box>
                <Box>
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Best Seller</a>
                  </Link>
                </Box>
                <Box>
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Feature Product</a>
                  </Link>
                </Box>
                <Box>
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Deal off day</a>
                  </Link>
                </Box>
                <Box>
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Handcrafted, Artisan Jewelry</a>
                  </Link>
                </Box>
                <Box>
                  <GoPrimitiveDot />
                  <Link href="#">
                    <a>Jewelry Boxes & Organizers</a>
                  </Link>
                </Box>
                <Box>
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
                <Box>
                  <GoPrimitiveDot />
                  <Link href="/myaccount">
                    <a>My account</a>
                  </Link>
                </Box>
                <Box>
                  <GoPrimitiveDot />
                  <Link href="/orders">
                    <a>Order History</a>
                  </Link>
                </Box>
                <Box>
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
                <span>Mon to Fri:8:30 am - 6:00 pm</span>
                <span>Sat and Sun:10:00 am – 5:00 pm</span>
              </Box>

              <Box
                p={4}
                h="100"
                color="#666"
                // backgroundImage="url('https://vcdn-vnexpress.vnecdn.net/2016/01/29/29-B1-A1-6079-1454038033.png')"
                // bg="tomato"
                backgroundImage="/assets/ebaylogo.png" // đây là ảnh e muốn nó hiển thị ra nè.
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              >
                {/* <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="/assets/imgWorking.png"
                  alt="Dan Abramov"
                /> */}
                <MdFavorite w="200px" />
                <span>wre Time In Works</span>
                <span>8:30 am - 6:00 pm</span>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Center>
    </>
  )
}
export default Footer
