import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Fade from "@mui/material/Fade";



export default function MyAccout() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <> 
        
        <Container>
            <Box>
                <Box sx={{ display: "flex" }}>
                    <Grid item lg={6}>
                        <Box>
                            <Typography component="h3" variant="h3">
                                My account
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Box>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Typography component="h4" variant="h4">
                                    Home
                                </Typography>
                                <Typography component="h4" variant="h4">
                                    My account
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Grid item lg={6}>
                    <Box>
                        <Typography component="h3" variant="h3">
                            Login
                        </Typography>
                        <FormControl variant="standard">
                            <Box>
                                <Box>
                                    <Typography>Username or email address *</Typography>
                                    <TextField label="Name" />
                                    <Typography>Password *</Typography>
                                    <TextField label="PassWord" />
                                </Box>
                                <Button sx={{color:"#fff", background:"rgb(64,198,255)",borderRadius:"25px",width:"100px"}}>Login</Button>
                                <Box>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Remember me"
                                    />
                                    <Box>
                                        <Typography component="span" variant="span">
                                            <a href="#"> Lost your password?</a>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box>
                        <Typography component="h3" variant="h3">
                            Register
                        </Typography>

                        <FormControl variant="standard">
                            <Box>
                                <Typography>Username or email address *</Typography>
                                <TextField label="Name" />
                                <Typography>Password *</Typography>
                                <TextField label="PassWord" />
                                <Box>
                                    <Fade in={checked}>
                                        <Box>
                                            <Typography >First Name *</Typography>
                                            <TextField label="Firt Name" />
                                            <Typography >Last Name *</Typography>
                                            <TextField label="Last Name" />
                                            <Typography >Shop Name *</Typography>
                                            <TextField label="Name Shop" />
                                            <Typography >Shop URL * </Typography>
                                            <TextField label="URL" />
                                            <Typography >Phone Number* </Typography>
                                            <TextField label="Number" />
                                        </Box>
                                    </Fade>
                                </Box>
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        defaultValue="user"
                                        row
                                        aria-label="group"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="user"
                                            control={<Radio />}
                                            label="I am a customer "
                                        />
                                        <FormControlLabel
                                            onChange={handleChange}
                                            value="vendor"
                                            control={<Radio />}
                                            label="I am a vendor"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <Box>
                                    <Button sx={{color:"#fff", background:"rgb(64,198,255)",borderRadius:"25px",width:"100px"}}>Register</Button>
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                </Grid>
            </Box>
        </Container>
     
        </>
    );
}