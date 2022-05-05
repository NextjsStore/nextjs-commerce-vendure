import React from "react";
import { Container, Box, Grid, Hidden } from '@mui/material';
import Link from "next/link";


// import icon

import LanguageIcon from '@mui/icons-material/Language';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
// makestyle
import { makeStyles } from "@material-ui/core/styles";

// import images
import arrow_down from '../assets/img/arrow_down.png';

const colorHeading = '#323232';
const colorHover = '#40c6ff';
const colorDefaul = '#666';

const useStyle_HeaderTop = makeStyles({
  headerTop: {
    padding: '10px',
    backgroundColor: '#f3f3f3',
  },
  menuTop: {
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
    '& li': {
      color:"#999",
      float: 'left',
      padding: '0px 10px',
      position: 'relative',
      '&:first-child': {
        paddingLeft: '0px',
        '&::before': {
          display: 'none',
        }
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        width: '1px',
        height: '14px',
        left: '0px',
        top: '6px',
        backgroundColor: '#999999',
      },
      '& a': {
        color: '#999',
        fontSize: '14px',
        fontFamily: "Mulish,'sans-serif'",
        '&:hover': {
          color: `${colorHover}`,
        }
      }
    }
  },
  headerTopRight: {
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
    float: 'right',
    '& li': {
      float: 'left',
      padding: '0px 10px',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      '&:first-child': {
        paddingLeft: '0px',
        '&::before': {
          display: 'none',
        }
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        width: '1px',
        height: '14px',
        left: '0px',
        top: '4px',
        backgroundColor: '#999999',
      },
      '& a': {
        color: '#999',
        fontSize: '14px',
        fontFamily: "Mulish,'sans-serif'",
        display: 'inline-flex',
        alignItems: 'center',
        '&:hover': {
          color: `${colorHover}`,
        },
        '& svg': {
          fontSize: '14px',
          marginRight: '5px',
        }
      },
      '& svg': {
        fontSize: '14px',
        marginRight: '5px',
        color: '#999',
      },
      '& select': {
        border: 'none',
        color: '#999',
        fontSize: '14px',
        fontFamily: "Mulish,'sans-serif'",
        '&:focus': {
          outline: 'none',
        }
      }
    },
    '@media (max-width: 899px)': {
      textAlign: 'center',
      float: 'none',
      '& li': {
        float: 'none',
        display: 'inline-block',
      }
    },
    '@media (max-width: 425px)': {
      '& li': {
        '& span': {
          display: 'none',
        }
      }
    }
  },
  curency: {
    '& select': {
      paddingRight: '15px',
      background: 'transparent',
      appearance: 'none',
      backgroundImage: `url(${arrow_down.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 1px top 6px;',
    }
  },
  language: {
    '& select': {
      background: 'transparent',
      appearance: 'none',
      backgroundImage: `url(${arrow_down.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 1px top 7px;',
    }
  }
});

const SideBarTop = () => {
  const classes = useStyle_HeaderTop()
  return (
    <div className={classes.headerTop}>
      <Container>
        <Grid container spacing={2} >
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} md={6}>
            <Box>
              <ul className={classes.menuTop}>
                <li >Call Support Free:1800123456</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Box>
              <ul className={classes.headerTopRight}>
                <li className={classes.curency}>
                  <select>
                    <option value="">USD, $</option>
                    <option value="">EUR, €</option>
                  </select>
                </li>
                <li className={classes.language}>
                  <LanguageIcon />
                  <select>
                    <option value="">English</option>
                    <option value="">Viet Nam</option>
                  </select>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}
export default SideBarTop;
