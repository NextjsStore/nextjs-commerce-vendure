import * as React from 'react'
import { FaCamera } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import {
  Center,
  Button,
  Container,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Textarea,
  Input,
  Accordion,
} from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
      <Box>
        <Box h="240px">
          <Box>
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
                    Profile
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
                      Profile
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container w="1200px" m="0px auto">
        <Flex>
          <Box w="40%">
            <Box border="1px solid #ccc" mr="120">
              <Box>
                <Text
                  fontSize="26"
                  component="div"
                  borderBottom="1px solid #ccc"
                  pb="10px"
                  pl="20px"
                >
                  Wallet
                </Text>
              </Box>
              <Box p="0 20px">
                <Box display="flex" justifyContent="space-between">
                  <Text>Total Points</Text>
                  <Text variant="body2" color="text.secondary">
                    0
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text>Points Used</Text>
                  <Text variant="body2" color="text.secondary">
                    0
                  </Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text>Available Points</Text>
                  <Text variant="body2" color="text.secondary">
                    0
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box elevation={3}>
              <Box border="1px solid #ccc" mr="120" mt="40">
                <Box>
                  <Text
                    fontSize="26"
                    component="div"
                    borderBottom="1px solid #ccc"
                    pb="10px"
                    pl="20px"
                  >
                    Profile
                  </Text>
                </Box>
                <Box p="0 20px">
                  <Text pt="10">Change Password</Text>
                  <Text pt="10">My orders</Text>
                  <Text pt="10">My Refunds</Text>
                  <Text pt="10">Need Help</Text>
                  <Text pt="15" borderTop="1px solid #ccc">
                    Log Out
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box w="60%">
            <Box>
              <Box border="1px solid #cccccc" p="30">
                <Box
                  border="1px solid"
                  height="150"
                  width="100%"
                  lineHeight="7"
                >
                  <Center>
                    <label htmlFor="contained-button-file">
                      <Text
                        fontSize="16"
                        textTransform="uppercase"
                        color="rgb(25, 118, 210)"
                      >
                        Upload
                      </Text>
                    </label>
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        marginLeft="-220"
                        zIndex="10"
                        opacity="0"
                      />
                      <FaCamera color="rgb(25, 118, 210)" />
                    </label>
                  </Center>
                </Box>
                <Box sx={{ paddingTop: '25px' }}>
                  <Text variant="H5" component="H5">
                    Name
                  </Text>
                  <Input type="text" w="100%" h="50" />
                </Box>
                <Box sx={{ paddingTop: '25px' }}>
                  <Text variant="H5" component="H5">
                    Bio
                  </Text>
                  <Textarea
                    placeholder="Here is a sample placeholder"
                    w="100%"
                    h="50"
                  />
                </Box>
              </Box>
              <Box elevation={3} border="1px solid #cccccc" p="30" mt="10">
                <Box sx={{ marginBottom: '10px' }}>
                  <Box display="flex" justifyContent="space-between">
                    <Text>Contact Number</Text>
                    <Box p="16px 0">
                      <AiOutlinePlus
                        label="add"
                        fontSize="small"
                        sx={{ color: '#1976d2' }}
                        color="rgb(25, 118, 210)"
                      />
                      add
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Accordion
                    disabled
                    bg="rgba(0, 0, 0, 0.12)"
                    mr="10"
                    w="50%"
                    pr="10"
                    pl="20"
                  >
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                  <Accordion
                    disabled
                    bg="rgba(0, 0, 0, 0.12)"
                    ml="10"
                    w="50%"
                    pl="20"
                  >
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                </Box>
              </Box>
              <Box elevation={3} border="1px solid #ccc" p="30" mt="10">
                <Box marginBottom="10px">
                  <Box display="flex" justifyContent="space-between">
                    <Text>Address</Text>
                    <Box p="16px 0">
                      <AiOutlinePlus
                        label="add"
                        fontSize="small"
                        color="rgb(25, 118, 210)"
                      />
                      add
                    </Box>
                  </Box>
                </Box>
                <Box display="flex">
                  <Accordion
                    disabled
                    bg="rgba(0, 0, 0, 0.12)"
                    mr="10"
                    w="50%"
                    pl="20"
                  >
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                  <Accordion
                    disabled
                    bg="rgba(0, 0, 0, 0.12)"
                    ml="10"
                    w="50%"
                    pl="20"
                  >
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}
export default Profile
