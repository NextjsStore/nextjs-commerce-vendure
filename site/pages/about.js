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
} from '@chakra-ui/react'
import Image from 'next/image'

const About = () => {
  return (
    <Container>
      <Box align="center">
        <Box h="240px">
          <Box
            color="#fff"
            backgroundImage="/assets/banner_page.png"
            h="200px"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            mb="60px"
          >
            <Flex w="1200px" m="0px auto">
              <Box lineHeight="3">
                <Heading fontSize="40" variant="h1">
                  About
                </Heading>
              </Box>
              <Spacer />
              <Box lineHeight="10">
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
        <Container w="1200px" m="12px auto">
          <Box>
            <Heading
              as="h1"
              sx={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: '36',
                color: '#293544',
              }}
            >
              Get to know Multistore
            </Heading>
            <Text
              sx={{
                textAlign: 'center',
                padding: '0 20%',
                marginTop: '20px',
                color: '#676c77',
              }}
            >
              Multistore vision is to create Indias most reliable and
              frictionless commerce ecosystem that creates life-changing
              experiences for buyers and sellers.
            </Text>
          </Box>
          <Center pt="30">
            <Box w="30%">
              <Circle size="80px" bg="#40c6ff" color="white">
                <MdOutlineInventory2 fontSize="40" />
              </Circle>
              <Text sx={{ fontWeight: '700' }} component="h5" variant="h5">
                35 Million+
              </Text>
              <Text sx={{ fontWeight: '700', color: '#676c77' }}>Products</Text>
            </Box>
            <Box w="30%">
              <Circle size="80px" bg="#40c6ff" color="white">
                <IoMdCart fontSize="40" />
              </Circle>
              <Text sx={{ fontWeight: '700' }} component="h5" variant="h5">
                250,000
              </Text>
              <Text sx={{ fontWeight: '700', color: '#676c77' }}>Sellers</Text>
            </Box>
            <Box w="30%">
              <Circle size="80px" bg="#40c6ff" color="white">
                <GoGlobe fontSize="40" />
              </Circle>
              <Text sx={{ fontWeight: '700' }} component="h5" variant="h5">
                6000+
              </Text>
              <Text sx={{ fontWeight: '700', color: '#676c77' }}>Cities</Text>
            </Box>
          </Center>
          <Box sx={{ textAlign: 'center', margin: '40px' }}>
            <Text
              sx={{
                margin: '10px',
                color: '#676c77',
              }}
            >
              In February 2010, Kunal Bahl along with Rohit Bansal, started
              Multistore.com Indias largest online marketplace, with the widest
              assortment of 30 million plus products across 800 plus Boxerse
              categories from over 125,000 regional, national, and international
              brands and retailers.
            </Text>
            <Text
              sx={{
                margin: '10px',
                color: '#676c77',
              }}
            >
              With millions of users and more than 300,000 sellers, Multistore
              is the shopping destination for Internet users across the country,
              delivering to 6000+ cities and towns in India.
            </Text>
            <Text
              sx={{
                margin: '10px',
                color: '#676c77',
              }}
            >
              In its journey till now, Multistore has partnered with several
              global marquee investors and inBoxiduals such as SoftBank,
              BlackRock, Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest,
              Intel Capital, Bessemer Venture Partners, Mr. Ratan Tata, among
              others.
            </Text>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
            <Heading
              as="h2"
              sx={{
                textAlign: 'center',
              }}
              color="#293544"
              fontSize="36"
            >
              Our Team
            </Heading>
            <Text
              sx={{
                padding: '0 20%',
                marginTop: '20px',
                color: '#676c77',
              }}
            >
              Each member of our team is a specialist in his or her field.
              Together, we make sure youre investing where the best returns are,
              while building loyalty across every touchpoint.
            </Text>
          </Box>
          <Flex pb="400">
            <Box w="25%" alignItems="center">
              <Box position="absolute">
                <Box>
                  <Image
                    width={258}
                    height={298}
                    src={AboutTeam.src}
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
            <Box w="25%">
              <Box position="absolute">
                <Box>
                  <Box>
                    <Image
                      width={258}
                      height={298}
                      layout="fixed"
                      src={AboutTeam_1.src}
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
            <Box w="25%">
              <Box position="absolute">
                <Box>
                  <Box>
                    <Image
                      width={258}
                      height={298}
                      layout="fixed"
                      src={AboutTeam_2.src}
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
            <Box w="25%">
              <Box position="absolute">
                <Box>
                  <Box>
                    <Image
                      width={258}
                      height={298}
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
    </Container>
  )
}
export default About
