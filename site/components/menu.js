import * as React from 'react'
import { Box, Grid, useOutsideClick } from '@chakra-ui/react'

// icon import
import {
  AiFillHome,
  AiFillPushpin,
  AiOutlineUnorderedList,
} from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import { GoCalendar } from 'react-icons/go'
const MenuListComposition = () => {
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
        <Box>
          <AiOutlineUnorderedList />
        </Box>
        <span>ALL CATEGORY</span>
      </button>
      <Box
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Box
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Box>
              <useOutsideClick onClickAway={handleClose}>
                <Box
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Box onClick={handleClose}>
                    <Box>
                      <AiFillHome />
                    </Box>
                    Homepage
                  </Box>
                  <Box onClick={handleClose}>
                    <Box>
                      <AiFillPushpin />
                    </Box>
                    Custom Prints
                  </Box>
                  <Box onClick={handleClose}>
                    <Box>
                      <BsPhone />
                    </Box>
                    Free file check
                  </Box>
                  <Box onClick={handleClose}>
                    <Box>
                      <GrLanguage />
                    </Box>
                    Graphic Design
                  </Box>
                  <Box onClick={handleClose}>
                    <Box>
                      <GoCalendar />
                    </Box>
                    Mailing
                  </Box>
                </Box>
              </useOutsideClick>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
export default MenuListComposition
