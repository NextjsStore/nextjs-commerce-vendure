import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import EmailIcon from '@mui/icons-material/Email'
import {
  Box,
  Container,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  Center,
} from '@chakra-ui/react'

const ContactUS = () => {
  return (
    <>
      <Box>
        <Box h="240px">
          <Box>
            <Box
              color="#fff"
              backgroundImage="/assets/imgWorking.jpg"
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
      </Box>
      <Center>
        <Container w="50%">
          <Flex>
            <Box>
              <Box>
                <Heading component="h4" variant="h4">
                  Contact us
                </Heading>
                <Box>
                  <FormControl sx={{ width: '100%', paddingRight: '40px' }}>
                    <input type="text" name="name" placeholder="Name*" />

                    <input type="text" name="email" placeholder="Your Email*" />
                    <input type="text" name="Subject" placeholder="Subject" />
                    <textarea
                      name="your-message"
                      placeholder="Message"
                    ></textarea>
                  </FormControl>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: '20px',
                        borderRadius: '25px',
                        width: '50%',
                        color: '#fff ',
                      }}
                    >
                      SUBMIT NOW
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Spacer />
            <Box>
              <Box>
                <Heading component="h4" variant="h4">
                  Location
                </Heading>
                <Box sx={{ display: 'flex' }}>
                  <LocalPhoneIcon color="primary" />
                  <Text component="h6" variant="h6">
                    0-800-12-345-6 880
                  </Text>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <AddLocationIcon color="primary" />
                  <Text component="h6" variant="h6">
                    257 Charlington Gates Road Morrison, Nr. 568
                  </Text>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <EmailIcon color="primary" />
                  <Text component="h6" variant="h6">
                    info@jruitstemplate.com
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Center>
    </>
  )
}
export default ContactUS
