import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Button } from '@mui/material';
import { useRouter } from "next/router";


const colorHover = '#40c6ff';
const useStyles = makeStyles({
  product: {
    marginTop: "50px",
    textAlign: "center",
    marginBottom: "30px"
  },
  tabsProduct: {
    paddingBottom: 25,
    textAlign: "center"
  },
  title: {
    color: "#444444",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  tabsTitle: {
    display: "inline-flex",
    '@media  (max-width: 767px)': {

      display: "inline-block ",
      width: "100%"

    }
  },

  tabs: {
    marginRight: 12,
    '@media  (max-width: 767px)': {
      display: "block",
      margin: "0px 0px 20px 0px",
      width: "100%"

    }
  },
  tabText: {
    textTransform: "capitalize",
    textDecoration: "none",
    color: "#444",
    fontSize: 16,
    padding: "6px 20px",
    border: "solid 1px#e3e3e3",
    WebkitBorderRadius: 32,
    borderRadius: 32,
    cursor: "pointer",
    '@media  (max-width: 750px)': {
      width: "100%",
      display: "block"
    },
    "&:hover": {
      backgroundColor: "rgb(64,198,255)",
      color: "#fff",
      transition: "width 2s"
    },
    "&:active": {
      backgroundColor: "rgb(64,198,255)",
      color: "#fff",
      transition: "width 2s"
    }

  },
  titleHome: {
    fontFamily: 'Merriweather,sans-serif',
    color: '#444444',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '30px 0px 25px 0px',
    '& span': {
      position: 'relative',
      display: 'inline-block',
      '&::after': {
        position: 'absolute',
        content: '""',
        width: '15px',
        height: '1px',
        left: '-30px',
        top: '18px',
        backgroundColor: `${colorHover}`,
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        width: '15px',
        height: '1px',
        right: '-30px',
        top: '18px',
        backgroundColor: `${colorHover}`,
      }
    }
  },
});

export default function Tab() {
  const classes = useStyles();
  const router = useRouter();
  const handleSubmit = (value) => {
    //console.log(value);
    router.push(`?cat=${value}`);
  };
  return (
    <>
      <Box className={classes.product}>
        <Box className={classes.tabsProduct}>
          <Typography className={classes.titleHome}><span>NEW PRODUCT</span></Typography>
          <Box className={classes.tabsTitle}>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmit(`SmartPhone`)}> All Product </Button>
            </Box>

            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmit(`Computer`)}>Computer</Button>
            </Box>

            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmit(`SmartPhone`)}>SmartPhone</Button>
            </Box>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmit(`Electronis`)}>Electronis</Button>
            </Box>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmit(`Jewelry`)}>Jewelry</Button>
            </Box>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmit(`Sports`)}>Sport</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
