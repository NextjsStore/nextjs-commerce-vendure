import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "@mui/material/Button";




const useStyles = makeStyles({
    pageThank:{
        textAlign:"center",
        marginBottom:50,
        marginTop:50
    },
    viewOrder: {
        borderRadius: '20px',
        height: '40px',
        lineHeight: '34px',
        padding: '0px 30px',
        color: '#fff',
        border: 'none',
        textTransform: 'uppercase',
        fontSize: '16px',
        marginTop: '20px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    icon:{
        paddingTop:30,
        paddingBottom:20
    },
    iconCheck:{
        color:"green",
        fontSize:"60px",
        marginTop:"4px",
        marginLeft:"6px",
    },
    text:{
        color:"#40c6ff",
        marginTop:"30px",
        marginBottom:"20px",

    },
    textmain:{
        fontWeight:600,
        fontSize:"48px"
    },
    title:{
        width:"815px",
        margin:"auto",
        marginTop:"20px",
        marginBottom:"60px"

    },
    titlemain:{
        fontSize:"24px"
    },
    button:{
        display:"inline-flex",
        marginBottom:"15px"
    },
    buttonShop:{
        margin:"15px",
    },
    buttonOrder:{
        margin:"15px"
    }

})
export default function About() {
    const classes = useStyles();

    return (
        <>
            <Container>


                <Paper elevation={3} className={classes.pageThank} >
                    <Box className={classes.icon}>
                        <CheckCircleIcon className={classes.iconCheck}/>
                    </Box>
                    <Box className={classes.text}>
                        <Typography component="h4" variant="h4" className={classes.textmain}>Order confirmed</Typography>

                    </Box>
                    <Box className={classes.title}>
                    <Typography component="p" variant="p" className={classes.titlemain}>You order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.</Typography>
                    </Box>
                    <Box className={classes.button} >
                        <Box className={classes.buttonShop}>
                            <Link href="/shop" >
                                <Button variant="contained" className={classes.viewOrder}>Continue Shopping</Button>
                            </Link>

                        </Box>
                        <Box  className={classes.buttonOrder}>
                            <Link href="/orders" >
                                <Button variant="contained" className={classes.viewOrder}>View Order</Button>
                            </Link>

                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}
