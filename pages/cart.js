import Container from "@mui/material/Container";
import CartItemsContainer from '../components/cart/cart-page/CartItemsContainer';
import { AppProvider } from "../libs/context/AppContext";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';import Banner from '../assets/img/banner_page.png';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
        paddingTop:"12px",
        float: "right",
        "@media (max-width: 768px)": {
          float: "inherit"
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

const Cart = (props) => {
    const classes = useStyles();


    return (
        <AppProvider>
            <Box className={classes.page}>
        <Container>
          <Box className={classes.titlePage}>
            <Grid item lg={6}>
              <Box>
                <Typography className={classes.textTile} component="h3" variant="h3">
                  Cart
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
                    Cart
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
            <Container>
                <CartItemsContainer />
                {props.children}
            </Container>
        </AppProvider>
    )
};

export default Cart;
