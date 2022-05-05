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
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image_1 from '../assets/img/deals_of_day_1.png';
import Image_2 from '../assets/img/deals_of_day_2.png';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Banner from '../assets/img/banner_page.png';





function createData(image,name, quantity, price) {
    return { image,name, quantity, price };
  }

  const rows = [
    createData(Image_1.src, "Iphone", 6.0, 24, 4.0),
    createData(Image_1.src, "swatch", 9.0, 37, 4.3),
    createData(Image_1.src,"Samsung", 16.0, 24, 6.0),
    createData(Image_1.src, "LG", 3.7, 67, 4.3),
    createData(Image_1.src, "Nokia", 16.0, 49, 3.9)
  ];

const useStyles = makeStyles({
    page: {
        marginBottom: "60px",
        minHeight: "200px",
        background:`url(${Banner.src})`,
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
        paddingTop:"12px",
        float: "right",
        "@media (max-width: 768px)": {
          float: "inherit"
        }
      },
    main_order:{
        marginBottom:"50px",
        paddingLeft:"60px",
        paddingRight:"60px",
        display:"flex",
        '@media (max-width: 1024px)': {
            display:"block"
        }
    },
    walletOrder:{
        marginTop:"50px"
    },
    order:{
        marginTop:40,
        marginBottom:50
    },
    formorder:{
        border:"1px solid rgba(0, 0, 0, 0.12)",
        padding:"25px",
        marginTop:"50px",
        marginLeft:"20px",
        marginRight:"20px",
        '@media (max-width: 700px)': {
            marginLeft:"0px",
        marginRight:"0px",
        }
    },
    orderDetail:{
        marginTop:"50px",
    },
    imageOrder:{
        width:"70px",
        marginRight:"15px"
    },
    formDetail:{
        '@media (max-width: 600px)': {
            display:"block"
        }
    },
    menuDetail:{
        '@media (max-width: 600px)': {
            marginTop:"50px"
        }
    },
    stepperscroll:{
        overflow:"hidden",
        marginBottom:"50px",
        '@media (max-width: 800px)': {
            overflowX:"scroll",
            with:"100%"
        }
    },

    form:{
        textAlign: "center",
        position: "relative",
        marginTop: "20px",
    },
    progressbar:{
        marginBottom: "30px",
        overflow: "hidden",
        color: "black",
        display:"contents",

        '& li':{
            listStyleType: "none",
            fontSize: "15px",
            width: "20%",
            float: "left",
            position: "relative",
            fontWeight: "400",
            '&:before':{
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                display: "block",
                fontSize: "20px",

                border:"1px dashed green",
                borderRadius: "50%",
                margin: "0 auto 15px auto",
                padding: "5px",
            },
            '&:after':{
                content: '""',
                width: "100%",
                height: "2px",
                background: "lightgray",
                position: "absolute",
                left: "0",
                top: "25px",
                zIndex: "-1",
            }
        }

    },
    step1:{
        color: "#2F8D46",
        '&:before':{
            content:'"1"',
            background: "#2F8D46",
            color:"#fff"
        },
        '&:after':{
            background: "#2F8D46 !important"
        }
    },
    step2:{
        '&:before':{
            content:'"2"',
            color: "green",
            background:"#fff",
        }
    },
    step3:{
        '&:before':{
            content:'"3"',
            color: "green",
            background:"#fff",
        }
    },
    step4:{
        '&:before':{
            content:'"4"',
            color: "green",
            background:"#fff",
        }
    },
    step5:{
        '&:before':{
            content:'"5"',
            color: "green",
            background:"#fff",
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

});
const Input = styled("input")({
    display: "none"
  });
export default function Myorder() {
    const classes = useStyles();
  return (
  <>
  <Box className={classes.page}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography className={classes.textTile} component="h3" variant="h3">
                  My Order
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
                    My Order
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box className={classes.main_order} sx={{}}>
      <Grid item lg={2}>
          <Paper  elevation={3} className={classes.walletOrder} >
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
          <Paper  elevation={3} className={classes.order} >
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
          <Grid item lg={3}>
              <Box className={classes.formorder} sx={{}}>
                <Box>
                    <Typography variant="h5" component="div" >
                        My Orders
                    </Typography>
                </Box>
                <Paper elevation={3}
                sx={{  maxWidth: "100%", background: "rgba(0, 0, 0, 0.12)", marginTop:"30px" }}
                >
                <MenuList>
                    <MenuItem>
                    <ListItemText>Order#21</ListItemText>
                    <Button sx={{ background: "#b7d7f7" }}>Order Received</Button>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                    <ListItemText>Order Date :</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        August 26,2021
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText>Order Time :</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        11.00 AM - 12.00 PM
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText>
                        <Typography variant="h6">Amount :</Typography>
                    </ListItemText>
                    <Typography variant="h6">$21.60</Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText>
                        <Typography variant="h6">Total Price :</Typography>
                    </ListItemText>
                    <Typography variant="h6">$21.60</Typography>
                    </MenuItem>
                </MenuList>
                </Paper>
                <Paper elevation={3}
                sx={{maxWidth: "100%", background: "rgba(0, 0, 0, 0.12)", marginTop:"30px" }}
                >
                <MenuList>
                    <MenuItem>
                    <ListItemText>Order#21</ListItemText>
                    <Button sx={{ background: "#b7d7f7" }}>Order Received</Button>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                    <ListItemText>Order Date :</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        August 26,2021
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText>Order Time :</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        11.00 AM - 12.00 PM
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText>
                        <Typography variant="h6">Amount :</Typography>
                    </ListItemText>
                    <Typography variant="h6">$21.60</Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText>
                        <Typography variant="h6">Total Price :</Typography>
                    </ListItemText>
                    <Typography variant="h6">$21.60</Typography>
                    </MenuItem>
                </MenuList>
                </Paper>
              </Box>
          </Grid>

              <Grid item lg={7}>
              <Box className={classes.orderDetail}>
              <Box sx={{ border: "1px solid rgba(0, 0, 0, 0.12) ", padding: "10px" }}>
                <List>
                    <ListItem disableGutters>
                    <ListItemText>
                        <Typography variant="h5"> OrderDetails - KN72GQ</Typography>
                    </ListItemText>
                    <IconButton>
                        <SentimentVeryDissatisfiedIcon />{" "}
                        <Typography >add for refund</Typography>
                    </IconButton>
                    <IconButton>
                        <VisibilityIcon /> <Typography>add for refund</Typography>
                    </IconButton>
                    </ListItem>
                </List>
                <Divider />

                <List>
                    <ListItem disableGutters className={classes.formDetail}>
                    <ListItemText>
                        <Grid>
                        <Box>
                            <Typography variant="h6" sx={{marginBottom:"10px"}}>Shopping Address</Typography>
                            <Typography variant="p"> OrderDetails - KN72GQ</Typography>
                        </Box>
                        <Box sx={{ marginTop: "25px" }}>
                            <Typography variant="h6" sx={{marginBottom:"10px"}}>Billing Adress</Typography>
                            <Typography variant="p"> OrderDetails - KN72GQ</Typography>
                        </Box>
                        </Grid>
                    </ListItemText>
                    <Grid>
                        <MenuList >
                        <MenuItem  className={classes.menuDetail}>
                            <ListItemText>Order Date :</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                            August 26,2021
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText>Order Time :</ListItemText>
                            <Typography variant="body2" color="text.secondary">
                            11.00 AM - 12.00 PM
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText>
                            <Typography variant="h6">Amount :</Typography>
                            </ListItemText>
                            <Typography variant="h6">$21.60</Typography>
                        </MenuItem>
                            <MenuItem>
                                <ListItemText>
                                    <Typography variant="h6">Total Price :</Typography>
                                </ListItemText>
                                <Typography variant="h6">$21.60</Typography>
                            </MenuItem>
                        </MenuList>
                    </Grid>
                    </ListItem>
                    <Divider />
                </List>

                <Box className={classes.stepperscroll} >
                    <form className={classes.form}>
						<ul  className={classes.progressbar}>
							<li   className={classes.step1}>
								<strong>Order Received</strong>
							</li>
							<li className={classes.step2} ><strong>Order Processing</strong></li>
							<li className={classes.step3} ><strong>Ready To Dispatch</strong></li>
							<li className={classes.step4} ><strong>Order Dispatched</strong></li>
                            <li className={classes.step5} ><strong>At Local Facility</strong></li>
						</ul>
					</form>
                </Box>

                <TableContainer component={Paper} >
                    <Table  aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{background:"rgba(0, 0, 0, 0.12)"}}>
                        <TableCell>Iteam</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.image}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Box sx={{display:"flex"}}>
                            <img src={row.image} className={classes.imageOrder}></img>
                            <Typography>{row.name}</Typography>
                            </Box>
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                </Box>
                </Box>
              </Grid>

          </Box>

          </>
  )}
