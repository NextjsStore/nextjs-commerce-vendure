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



const steps = [
  "Order Received",
  "Order Processing",
  "Ready To Dispatch",
  "Order Dispatched",
  "At Local Facility"
];

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
    main_order:{
        marginBottom:"50px",
        paddingLeft:"60px",
        paddingRight:"60px",
        display:"flex",
        '@media (max-width: 899px)': {
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
        marginRight:"20px"
    },
    orderDetail:{
        marginTop:"50px",
    },
    imageOrder:{
        width:"70px",
        marginRight:"15px"
    },
})
const Input = styled("input")({
    display: "none"
  });
export default function Myorder() {
    const classes = useStyles();
  return (
  <>

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
                    <ListItem disableGutters>
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
                        <MenuList>
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
                    </Grid>
                    </ListItem>
                    <Divider />
                </List>

                <Box sx={{ paddingTop: "35px" }}>
                    <Stepper activeStep={1}
                    alternativeLabel
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile>
                    {steps.map((label) => (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                </Box>

                <TableContainer component={Paper} sx={{ marginTop: "50px" }}>
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
