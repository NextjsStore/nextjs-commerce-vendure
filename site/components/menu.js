import * as React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import MenuIcon from '@mui/icons-material/Menu'

import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'

// icon import
import HomeIcon from '@mui/icons-material/Home'
import PushPinIcon from '@mui/icons-material/PushPin'
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp'
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp'
import TheatersIcon from '@mui/icons-material/Theaters'

import ListIcon from '@mui/icons-material/List'

// makestyle

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Box className="header">
      <button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <span>ALL CATEGORY</span>
      </button>
      <Popper
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
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    {' '}
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    Homepage
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {' '}
                    <ListItemIcon>
                      <PushPinIcon />
                    </ListItemIcon>
                    Custom Prints
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {' '}
                    <ListItemIcon>
                      <PhoneIphoneSharpIcon />
                    </ListItemIcon>
                    Free file check
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {' '}
                    <ListItemIcon>
                      <LanguageSharpIcon />
                    </ListItemIcon>
                    Graphic Design
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {' '}
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
  )
}
