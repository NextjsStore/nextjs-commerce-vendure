import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import images
import bgEmail from '../assets/img/bg-home1-newleter.png';
import { Box, FormGroup, Input } from '@mui/material';


const useStylesEmail = makeStyles({
    custormForm:{
        marginTop: "50px",
        background: `url(${bgEmail.src})`,
        backgroundPosition: "center !important",
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover !important",
        paddingTop: "80px",
        paddingBottom: "52px",
        '@media  (max-width: 768px)': {
            width: "100%",
            textAlign:"center"
        }
    },
    form:{
        display: "flex",
        position: "relative",
        '@media  (max-width: 768px)': {
            display: 'inline-block',
        }
    },

    text:{
        lineHeight: '35px',
        fontSize: "30px",
        fontWeight: 700,
        fontFamily: 'Merriweather,sans-serif',
        color: '#323232',
    },

    formInput:{
        width: "70%",
        paddingLeft: "20px",
        paddingRight: "20px",
        border: "none",
        borderRadius: 0,
        height: "45px",
        '&:focus':{
            outline: 'none'
        },
        '@media  (max-width: 768px)': {
            width: "100%",
        }

    },

    formFields:{
        marginTop: "20px",
        display:"block",
    },
    formButton:{
        width: "20%",
        float: "right",
        borderRadius: "24px",
        color: "#fff",
        background: "#59ccfc",
        border: "none",
        height: "45px",
        '&:hover':{
            background: '#38acdd',
        },
        '@media  (max-width: 768px)': {
            width: "100%",
            marginTop:"30px"
        }
    },
});



export default function  NameForm() {
    const classes = useStylesEmail();
        return (

            <Box className={classes.custormForm} >
                <Container maxWidth="lg" container spacing={2}  >

                    <Box className={classes.form}  >
                        <Grid item lg={3} md={4} >
                            <Box className={classes.boxtext}>
                                <Typography  className={classes.text}>
                                    Subscribe to our newsletter
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={9} md={8}  >
                            <FormGroup  className={classes.formFields}>

                                <input
                                    className={classes.formInput}
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    validate
                                />
                                    <Button className={classes.formButton} type="submit" color="primary">Subscribe</Button>

                            </FormGroup>
                        </Grid>
                    </Box>

                </Container>

            </Box>
        )
    }

