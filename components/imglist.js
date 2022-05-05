import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image1 from '../assets/img/seller_1.png';
import Image2 from '../assets/img/seller_2.png';
import Image3 from '../assets/img/seller_3.png';
import Image4 from '../assets/img/seller_4.png';
import Image5 from '../assets/img/seller_5.png';
import Image6 from '../assets/img/seller_6.png';
import Image7 from '../assets/img/seller_7.png';
import Image8 from '../assets/img/seller_8.png';
import Image9 from '../assets/img/seller_9.png';
import { Grid, Link } from "@mui/material";
import { display } from "@mui/system";

const useStyles = makeStyles({
  wrapperImage:{
    display:"flex",
    alignItems:"center",
    marginTop:'50px',

    '@media (max-width: 768px)': {
      display:"block",
      alignItems:"inherit"

  }
  },
  rowImage:{
    display:"flex",
    marginBottom:"20px",
    '@media (max-width: 600px)': {
      display:"block",
      marginBottom:"30px"


  }
  },
  box_1Image:{
    boxSizing: "border-box",
    paddingRight: "15px",
    '@media (max-width: 768px)': {
      paddingRight: "0px",
      marginBottom:"30px"
  }
  },
  box_Image:{
    marginBottom:"30px"
  },
  box_2Image:{
    display:"flex",
    paddingRight: "15px",
    paddingLeft: "15px",
    '@media (max-width: 768px)': {
      paddingRight: "0px",
      marginBottom:"30px",
      paddingLeft: "0px",

  },
  '@media (max-width: 600px)': {
    paddingLeft: "0px",
    display:"block",
}

  },
  box_2Image1:{
    paddingRight:"15px",
    marginBottom:"30px",
    '@media (max-width: 768px)': {
      paddingRight: "0px",
      marginBottom:"30px"
  },
  },
  box_2Image2:{
    paddingRight:"30px",
    '@media (max-width: 600px)': {
      paddingRight: "0px",
      marginBottom:"30px"


  },
  },
  box_3Image:{
    paddingRight: "15px",
    paddingLeft: "15px",
    '@media (max-width: 768px)': {
      width:"100%",
      paddingLeft: "0px",
      marginBottom:"30px"
  },
  '@media (max-width: 600px)': {
    paddingRight: "0px",
}

  },
  box_4Image:{
    paddingLeft: "15px",
    '@media (max-width: 768px)': {
      width:"100%"
    },
    '@media (max-width: 600px)': {
      paddingLeft: "0px",
  }
  },
  Image:{
    width:"100%",
    transition: "all .5s",
    '@media (max-width: 768px)': {
      width:"100%",
  }
  }
})

export default function NewImageList() {
  const classes = useStyles();
    return (
        <>
      <Box className={classes.wrapperImage}>
            <Box className={classes.box_1Image}>
              <Box>
                <Link href="/shop">
                <img src={Image1.src} className={classes.Image} />
                </Link>
              </Box>
          </Box>
        <Box className={classes.rowImage}>
          <Box>
            <Box className={classes.box_2Image} >
                <Box className={classes.box_2Image1}>
                <Link href="/product/pny-micro-hc">
                    <img src={Image2.src} className={classes.Image} />
                    </Link>
                </Box>
                <Box>
                <Link href="/product/dz09-smart-watch">
                    <img src={Image3.src} className={classes.Image} />
                    </Link>
                </Box>
            </Box>
            <Box className={classes.box_2Image}>
                <Box  className={classes.box_2Image2} >
                <Link href="/product/fastfood-humburger-with-option">
                    <img src={Image6.src} className={classes.Image} />
                    </Link>
                </Box>
                <Box >
                <Link href="/product/black-skirt-for-women/">
                    <img src={Image7.src} className={classes.Image} />
                    </Link>
                </Box>
            </Box>
          </Box>

        </Box>


        <Box className={classes.rowImage}>
          <Box className={classes.box_3Image}>
              <Box className={classes.box_Image}>
              <Link href="  /product/apple-swatch/">
                  <img src={Image5.src} className={classes.Image}  />
                  </Link>
              </Box>
              <Box>
              <Link href=" /product/apple-swatch/">
                <img src={Image4.src} className={classes.Image}/>
                </Link>
              </Box>

          </Box>
          <Box className={classes.box_4Image}>
              <Box className={classes.box_Image}>
              <Link href=" /product/baby-hand-bell-rattlle/">
                  <img src={Image8.src} className={classes.Image} />
                  </Link>
              </Box>
              <Box>
              <Link href="/product/american-humburger-with-salad/">
                  <img src={Image9.src} className={classes.Image} />
                  </Link>
              </Box>
          </Box>
        </Box>
      </Box>
        </>
    );
}

