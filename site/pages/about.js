import * as React from 'react'
import AboutTeam from '../assets/aboutpng.png'
import AboutTeam_1 from '../assets/aboutteam01.png'
import AboutTeam_2 from '../assets/aboutteam02.png'
import AboutTeam_3 from '../assets/aboutteam03.png'
import { MdOutlineInventory2 } from 'react-icons/md'
import { IoMdCart } from 'react-icons/io'
import { GoGlobe } from 'react-icons/go'
import {
  Center,
  Container,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Circle,
  Image,
} from '@chakra-ui/react'
import commerce from '@lib/api/commerce'

const About = (props) => {
  return (
    <>
      <Box align="center">
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
                  About
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
                    About
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Container
          maxW={{
            md: '768px',
            lg: '960px',
            xl: '1200px',
          }}
          m="12px auto"
        >
          <Box>
            <Heading as="h2" size="xl" color="brand.title">
              Get to know Multistore
            </Heading>
            <Text textAlign="center" pl="6" pr="6" mt="5" color="#676c77">
              Multistore vision is to create Indias most reliable and
              frictionless commerce ecosystem that creates life-changing
              experiences for buyers and sellers.
            </Text>
          </Box>
          <Center pt="6">
            <Box w="30%">
              <Circle size="80px" bg="brand.primary" color="white">
                <MdOutlineInventory2 fontSize="40" />
              </Circle>
              <Text sx={{ fontWeight: '700' }} component="h5" variant="h5">
                35 Million+
              </Text>
              <Text sx={{ fontWeight: '700', color: '#676c77' }}>Products</Text>
            </Box>
            <Box w="30%">
              <Circle size="80px" bg="brand.primary" color="white">
                <IoMdCart fontSize="40" />
              </Circle>
              <Text fontWeight="700" component="h5" variant="h5">
                250,000
              </Text>
              <Text fontWeight="700" color="#676c77">
                Sellers
              </Text>
            </Box>
            <Box w="30%">
              <Circle size="80px" bg="brand.primary" color="white">
                <GoGlobe fontSize="40" />
              </Circle>
              <Text fontWeight="700" component="h5" variant="h5">
                6000+
              </Text>
              <Text fontWeight="700" color="#676c77">
                Cities
              </Text>
            </Box>
          </Center>
          <Box m="10" color="#676c77">
            <Text m="3">
              In February 2010, Kunal Bahl along with Rohit Bansal, started
              Multistore.com Indias largest online marketplace, with the widest
              assortment of 30 million plus products across 800 plus Boxerse
              categories from over 125,000 regional, national, and international
              brands and retailers.
            </Text>
            <Text m="3">
              With millions of users and more than 300,000 sellers, Multistore
              is the shopping destination for Internet users across the country,
              delivering to 6000+ cities and towns in India.
            </Text>
            <Text m="3">
              In its journey till now, Multistore has partnered with several
              global marquee investors and inBoxiduals such as SoftBank,
              BlackRock, Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest,
              Intel Capital, Bessemer Venture Partners, Mr. Ratan Tata, among
              others.
            </Text>
          </Box>
          <Box mt="6">
            <Heading as="h2" color="brand.title" fontSize="36">
              Our Team
            </Heading>
            <Text mt="5" mb="5" color="#676c77">
              Each member of our team is a specialist in his or her field.
              Together, we make sure youre investing where the best returns are,
              while building loyalty across every touchpoint.
            </Text>
          </Box>
          <Flex pb="20" direction={['column', 'column', 'row', 'row']}>
            <Box w={{ sm: '100%', md: '25%' }} p="6">
              <Box position="relative">
                <Box>
                  <Image src={AboutTeam.src} alt="Philip Demarco" />
                </Box>
                <Box
                  bg="brand.primary"
                  w="80%"
                  position="absolute"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="#fff"
                  pt="2"
                  pb="2"
                >
                  <Heading fontSize="16">Philip Demarco</Heading>
                  <Text fontSize="14">Business Analyst</Text>
                </Box>
              </Box>
              <Box>
                <Text display="none">
                  By testing and launching new partners and internal tech
                  solutions, he increases both efficiency and performance
                </Text>
                <Box>
                  <a href="https://facebook.com/">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://google.com/">
                    <i className="fa fa-google"></i>
                  </a>
                </Box>
              </Box>
            </Box>
            <Box w={{ sm: '100%', md: '25%' }} p="6">
              <Box position="relative">
                <Box>
                  <Box>
                    <Image
                      layout="fixed"
                      src={AboutTeam_1.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Box
                    bg="brand.primary"
                    w="80%"
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="#fff"
                    pt="2"
                    pb="2"
                  >
                    <Heading fontSize="16">Philip Demarco</Heading>
                    <Text fontSize="14">Business Analyst</Text>
                  </Box>
                </Box>
                <Box>
                  <Text display="none">
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Text>
                  <Box>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box w={{ sm: '100%', md: '25%' }} p="6">
              <Box position="relative">
                <Box>
                  <Box>
                    <Image
                      layout="fixed"
                      src={AboutTeam_2.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Box
                    bg="brand.primary"
                    w="80%"
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="#fff"
                    lineHeight="1"
                    pt="2"
                    pb="2"
                  >
                    <Heading fontSize="16">Philip Demarco</Heading>
                    <Text fontSize="14">Business Analyst</Text>
                  </Box>
                </Box>
                <Box>
                  <Text display="none">
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Text>
                  <Box>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box w={{ sm: '100%', md: '25%' }} p="6">
              <Box position="relative">
                <Box>
                  <Box>
                    <Image
                      layout="fixed"
                      src={AboutTeam_3.src}
                      alt="Philip Demarco"
                    />
                  </Box>
                  <Box
                    bg="rgb(64,198,255)"
                    w="80%"
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="#fff"
                    lineHeight="1"
                    pt="2"
                    pb="2"
                  >
                    <Heading fontSize="16">Philip Demarco</Heading>
                    <Text fontSize="14">Business Analyst</Text>
                  </Box>
                </Box>
                <Box>
                  <Text display="none">
                    By testing and launching new partners and internal tech
                    solutions, he increases both efficiency and performance
                  </Text>
                  <Box>
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://google.com/">
                      <i className="fa fa-google"></i>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
export default About

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
