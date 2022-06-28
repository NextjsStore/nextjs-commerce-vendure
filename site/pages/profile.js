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
            </Box>
            <Box elevation={3}>
              <Box>
                <Box>
                  <Text variant="h5" component="div">
                    Profile
                  </Text>
                </Box>
                <Box>
                  <Text>Change Password</Text>
                </Box>
                <Box>
                  <Text>My orders</Text>
                </Box>
                <Box>
                  <Text>My Refunds</Text>
                </Box>
                <Box>
                  <Text>Need Help</Text>
                </Box>
                <Box />
                <Box>
                  <Text>Log Out</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Spacer />
          <Box w="60%">
            <Box>
              <Box elevation={3} border="1px solid #cccccc" p="30">
                <Box
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    border: '1px solid',
                    height: 150,
                    width: '100%',
                    paddingLeft: '47%',
                  }}
                >
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <Button component="span">Upload</Button>
                  </label>
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <FaCamera />
                  </label>
                </Box>
                <Box sx={{ paddingTop: '25px' }}>
                  <Text variant="H5" component="H5">
                    Name
                  </Text>
                  <input type="text" />
                </Box>
                <Box sx={{ paddingTop: '25px' }}>
                  <Text variant="H5" component="H5">
                    Bio
                  </Text>
                  <Textarea placeholder="Here is a sample placeholder" />
                </Box>
              </Box>
              <Box elevation={3} border="1px solid #cccccc" p="30" mt="10">
                <Box sx={{ marginBottom: '10px' }}>
                  <Box>
                    <Text>Contact Number</Text>
                    <Box>
                      <AiOutlinePlus
                        label="add"
                        fontSize="small"
                        sx={{ color: '#1976d2' }}
                      />
                      add
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Accordion disabled bg="#ccc" mr="10">
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                  <Accordion disabled bg="#ccc" mr="10">
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                </Box>
              </Box>
              <Box elevation={3} border="1px solid #cccccc" p="30" mt="10">
                <Box sx={{ marginBottom: '10px' }}>
                  <Box>
                    <Text>Address</Text>
                    <Box>
                      <AiOutlinePlus
                        label="add"
                        fontSize="small"
                        sx={{ color: '#1976d2' }}
                      />
                      add
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Accordion disabled bg="#ccc" mr="10">
                    <Box aria-controls="panel3a-content" id="panel3a-header">
                      <Text>0362788997</Text>
                    </Box>
                  </Accordion>
                  <Accordion disabled bg="#ccc" mr="10">
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
