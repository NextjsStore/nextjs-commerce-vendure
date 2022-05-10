import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "@mui/icons-material/Menu";

import ListItemIcon from "@mui/material/ListItemIcon";
import Box from '@mui/material/Box';

// icon import
import HomeIcon from '@mui/icons-material/Home';
import PushPinIcon from '@mui/icons-material/PushPin';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import TheatersIcon from '@mui/icons-material/Theaters';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import DiamondIcon from '@mui/icons-material/Diamond';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ChairIcon from '@mui/icons-material/Chair';
import BookIcon from '@mui/icons-material/Book';
import ListIcon from '@mui/icons-material/List';

// makestyle
import { makeStyles } from "@material-ui/core/styles";

const colorHover = '#40c6ff';
const useStyle_category_header = makeStyles({

  buttonCategory: {
    color: '#444',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    height: '43px',
    paddingRight: '15px',
    border: '0px',
    background: '#fff',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    minWidth: '270px',
    marginTop: 13,
    '@media (max-width: 899px) ': {
      marginTop: '0px',
    },
    '&.active': {
      cursor: 'pointer',
      background: `${colorHover}`,
      color: '#fff',
      '& svg': {
        marginLeft: '10px',
        transition: 'all 0.25s',
        color: '#fff',
      }
    },
    '& svg': {
      marginLeft: '-5px',
      fontSize: '30px',
      color: '#444',
      transition: 'all 0.25s',
    },
    '&:aria-expanded="true"': {
      cursor: 'pointer',
      background: `${colorHover}`,
      color: '#fff',
      '& svg': {
        marginLeft: '10px',
        transition: 'all 0.25s',
        color: '#fff',
      }
    },
    '&:hover': {
      cursor: 'pointer',
      background: `${colorHover}`,
      color: '#fff',
      '& svg': {
        marginLeft: '10px',
        transition: 'all 0.25s',
        color: '#fff',
      }
    }
  },
  listCategoryHome: {
    minWidth: '270px',
    zIndex: '100',
    '& li': {
      fontSize: '14px',
      textTransform: 'capitalize',
      lineHeight: ' 45px',
      height: '45px',
      '& a': {
        color: '#444',
      },
      '& svg': {
        fontSize: '14px',
      },
      '&:hover': {
        backgroundColor: 'rgba(64,198,255,0.4)',
        '& svg': {
          color: '#fff',
        }
      }
    }
  },
  Category: {
    zIndex: 10
  }
});

export default function MenuListComposition() {

  const classes = useStyle_category_header()

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (

    <Box className="header">
      <button
        className={open === false ?
          `${classes.buttonCategory}` : `${classes.buttonCategory}` + ' ' + `active`}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <span>ALL CATEGORY</span>
      </button>
      <Popper
        className={classes.Category}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={classes.listCategoryHome}
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    Homepage
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <ListItemIcon>
                      <PushPinIcon />
                    </ListItemIcon>
                    Custom Prints
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <ListItemIcon>
                      <PhoneIphoneSharpIcon />
                    </ListItemIcon>
                    Free file check
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <ListItemIcon>
                      <LanguageSharpIcon />
                    </ListItemIcon>
                    Graphic Design
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <ListItemIcon>
                      <TheatersIcon />
                    </ListItemIcon>
                    Mailing
                  </MenuItem>
                 
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>

  );
}
