import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import AddIcon from '@mui/icons-material/Add'
import ListItemIcon from '@mui/material/ListItemIcon'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import {
  Center,
  Button,
  Container,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Checkbox,
  Input,
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
              <Paper>
                <MenuList>
                  <MenuItem>
                    <Text variant="h5" component="div">
                      Wallet
                    </Text>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText>Total Points</ListItemText>
                    <Text variant="body2" color="text.secondary">
                      0
                    </Text>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Points Used</ListItemText>
                    <Text variant="body2" color="text.secondary">
                      0
                    </Text>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Available Points</ListItemText>
                    <Text variant="body2" color="text.secondary">
                      0
                    </Text>
                  </MenuItem>
                </MenuList>
              </Paper>
              <Paper elevation={3}>
                <MenuList>
                  <MenuItem>
                    <Text variant="h5" component="div">
                      Profile
                    </Text>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Change Password</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>My orders</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>My Refunds</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Need Help</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText>Log Out</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Box>
            <Spacer />
            <Box item lg={8}>
              <Box sx={{ marginLeft: '80px' }}>
                <Paper elevation={3}>
                  <Stack
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
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Stack>
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
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      style={{ width: '100%' }}
                    />
                  </Box>
                </Paper>
                <Paper elevation={3}>
                  <MenuList sx={{ marginBottom: '10px' }}>
                    <MenuItem>
                      <ListItemText>Contact Number</ListItemText>
                      <ListItemIcon>
                        <AddIcon
                          label="add"
                          fontSize="small"
                          sx={{ color: '#1976d2' }}
                        />
                        add
                      </ListItemIcon>
                    </MenuItem>
                  </MenuList>
                  <Box sx={{ display: 'flex' }}>
                    <Accordion disabled>
                      <AccordionSummary
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Text>0362788997</Text>
                      </AccordionSummary>
                    </Accordion>
                    <Accordion disabled>
                      <AccordionSummary
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Text>0362788997</Text>
                      </AccordionSummary>
                    </Accordion>
                  </Box>
                </Paper>
                <Paper elevation={3}>
                  <MenuList sx={{ marginBottom: '10px' }}>
                    <MenuItem>
                      <ListItemText>Address</ListItemText>
                      <ListItemIcon>
                        <AddIcon
                          label="add"
                          fontSize="small"
                          sx={{ color: '#1976d2' }}
                        />
                        add
                      </ListItemIcon>
                    </MenuItem>
                  </MenuList>
                  <Box sx={{ display: 'flex' }}>
                    <Accordion disabled>
                      <AccordionSummary
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Text>0362788997</Text>
                      </AccordionSummary>
                    </Accordion>
                    <Accordion disabled>
                      <AccordionSummary
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Text>0362788997</Text>
                      </AccordionSummary>
                    </Accordion>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Center>
    </>
  )
}
export default Profile
