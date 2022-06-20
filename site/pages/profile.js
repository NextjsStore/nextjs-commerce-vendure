import * as React from 'react'
import ListItemText from '@mui/material/ListItemText'
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
              <Flex>
                <Box>
                  <Heading component="h3" variant="h3">
                    Profile
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Heading component="h6" variant="h6">
                    Home
                  </Heading>
                  <Heading component="h6" variant="h6">
                    Profile
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
                <Box>
                  <Box>
                    <Text variant="h5" component="div">
                      Wallet
                    </Text>
                  </Box>
                  <Box />
                  <Box>
                    <ListItemText>Total Points</ListItemText>
                    <Text variant="body2" color="text.secondary">
                      0
                    </Text>
                  </Box>
                  <Box>
                    <ListItemText>Points Used</ListItemText>
                    <Text variant="body2" color="text.secondary">
                      0
                    </Text>
                  </Box>
                  <Box>
                    <ListItemText>Available Points</ListItemText>
                    <Text variant="body2" color="text.secondary">
                      0
                    </Text>
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
                    <ListItemText>Change Password</ListItemText>
                  </Box>
                  <Box>
                    <ListItemText>My orders</ListItemText>
                  </Box>
                  <Box>
                    <ListItemText>My Refunds</ListItemText>
                  </Box>
                  <Box>
                    <ListItemText>Need Help</ListItemText>
                  </Box>
                  <Box />
                  <Box>
                    <ListItemText>Log Out</ListItemText>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Spacer />
            <Box item lg={8}>
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
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                      />
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
                      <ListItemText>Contact Number</ListItemText>
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
                      <ListItemText>Address</ListItemText>
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
      </Center>
    </>
  )
}
export default Profile
