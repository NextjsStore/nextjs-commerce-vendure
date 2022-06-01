import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Link } from "@mui/material";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AddIcon from '@mui/icons-material/Add';
import ListItemIcon from '@mui/material/ListItemIcon';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Banner from '../assets/img/banner_page.png';
import Breadcrumbs from "@mui/material/Breadcrumbs";



const useStyles = makeStyles({
    page: {
        marginBottom: "60px",
        minHeight: "200px",
        backgroundImage:`url(${Banner.src})`,
        backgroundSize: "cover"
      },

      titlePage: {
        display: "flex",
        paddingTop: "75px",
        paddingBottom: "75px",
        "@media (max-width: 768px)": {
          display: "block"
        }
      },

      rightTextPage: {
        float: "right",
        paddingTop:"12px",
        "@media (max-width: 768px)": {
          float: "inherit"
        }
      },


    main_profile:{
        display:"flex",
        '@media (max-width: 899px)': {
            display:"block"
        }
    },
    wallet:{
        marginTop:70
    },
    profile:{
        marginTop:50,
        marginBottom:50
    },
    formProfileMain:{
        marginLeft:"80px",
        '@media (max-width: 768px)': {
            marginLeft:"0px",
        }

    },
    formProfile:{
        marginTop:70,

        padding:25
    },
    formNameProfile:{
        width:"100%",
        height:50
    },
    contactProfile:{
        padding:20,
        marginTop:25
    },
    addressProfile:{
        padding:20,
        marginTop:25,
        marginBottom:10
    },
    accor:{
        width:"50%",
        marginLeft:"15px",
        '@media (max-width: 768px)': {
            marginLeft:"0px",
            margin:"4px"
        }
    },
    textTile:{
        color: "white",
        fontFamily:"Merriweather",
        fontSize:"50px",
        fontWeight:700
      },
      titleText:{
        color: "white",
        fontFamily:"Muli",
        fontWeight:400,
        fontSize:"14px"
      },
})
const Input = styled("input")({
    display: "none"
  });
export default function Profile() {
    const classes = useStyles();
  return (
  <>
  <Box className={classes.page}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography className={classes.textTile} component="h3" variant="h3">
                  Profile
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={classes.rightTextPage}>
                <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Home
                  </Typography>
                  <Typography
                    className={classes.titleText}
                    component="h6"
                    variant="h6"
                  >
                    Profile
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>




  <Container direction="row">
      <Box className={classes.main_profile} sx={{}}>
      <Grid item lg={4}>
          <Paper  elevation={3} className={classes.wallet} >
            <MenuList>
                <MenuItem>
                    <Typography variant="h5" component="div">
                        Wallet
                    </Typography>

                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Total Points</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        0
                     </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Points Used</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        0
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Available Points</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        0
                    </Typography>
                </MenuItem>
            </MenuList>
          </Paper>
          <Paper  elevation={3} className={classes.profile} >


            <MenuList>
                <MenuItem>
                    <Typography variant="h5" component="div">
                        Profile
                    </Typography>

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
      </Grid>
      <Grid item lg={8}>
          <Box sx={{ marginLeft:"80px"}} className={classes.formProfileMain}>
          <Paper elevation={3} className={classes.formProfile}>
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                    border: "1px solid",
                    height: 150,
                    width: "100%",
                    paddingLeft: "47%"
                }}
                >
                <label htmlFor="contained-button-file">
                    <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    />
                    <Button  component="span">
                    Upload
                    </Button>
                </label>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    >
                    <PhotoCamera />
                    </IconButton>
                </label>
            </Stack>
            <Box sx={{paddingTop:"25px"}}>
                <Typography variant="H5" component="H5">
                    Name
                </Typography>
                <input className={classes.formNameProfile} type="text"/>
            </Box>
            <Box sx={{paddingTop:"25px"}}>
                <Typography variant="H5" component="H5">
                    Bio
                </Typography>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    style={{ width:"100%" }}
                />
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.contactProfile}>
          <MenuList sx={{marginBottom:"10px"}}>
                <MenuItem>
                    <ListItemText>Contact Number</ListItemText>
                    <ListItemIcon>
                        <AddIcon label="add" fontSize="small" sx={{color:"#1976d2"}}/>add
                    </ListItemIcon>
                </MenuItem>
            </MenuList>
            <Box sx={{display:"flex"}}>
            <Accordion disabled  className={classes.accor}>
                <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                    <Typography>0362788997</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion disabled  className={classes.accor}>
                <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                    <Typography>0362788997</Typography>
                </AccordionSummary>
            </Accordion>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.addressProfile}>
          <MenuList sx={{marginBottom:"10px"}}>
                <MenuItem>
                    <ListItemText>Address</ListItemText>
                    <ListItemIcon>
                        <AddIcon label="add" fontSize="small" sx={{color:"#1976d2"}}/>add
                    </ListItemIcon>
                </MenuItem>
            </MenuList>
            <Box sx={{display:"flex"}}>
            <Accordion disabled className={classes.accor}  >
                <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                    <Typography>0362788997</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion disabled  className={classes.accor}>
                <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                    <Typography>0362788997</Typography>
                </AccordionSummary>
            </Accordion>
            </Box>
          </Paper>
          </Box>
      </Grid>
      </Box>
  </Container>
  </>
  );
}
