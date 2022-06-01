import React from "react";
import { Container, Grid } from '@mui/material';
import MenuListComposition from '../components/menu';
import ResponsiveAppBar from '../components/menuPhu';

// import banerHome 
import bannerHome from '../assets/bannerHome.png';


const HeaderCenter = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container direction="row" lg={12}>
                    <Grid item xs={9} sm={5} md={3} lg={3}>
                        <MenuListComposition />
                    </Grid>
                    <Grid item xs={3} sm={7} md={9} lg={9} >
                        <ResponsiveAppBar />
                    </Grid>
                </Grid>
            </Container>

        </>

    )
}
export default HeaderCenter;