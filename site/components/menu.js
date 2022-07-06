import * as React from 'react'
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react'

// icon import
import { AiFillHome, AiFillPushpin } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import { GoCalendar } from 'react-icons/go'
import { FaListUl } from 'react-icons/fa'

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
    <Menu>
      <MenuButton
        fontSize="16px"
        fontWeight="bold"
        textTransform="uppercase"
        height="45px"
        border="0px"
        width="270px"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        bg="#fff"
        _hover={{ bg: '#40c6ff', color: ' #fff' }}
      >
        <Box display="flex" align-items="center">
          <Box>
            <FaListUl fontSize="18px" />
          </Box>
          <Box pl="3"> ALL CATEGORY</Box>
        </Box>
      </MenuButton>
      <MenuList zIndex={15} w="270px">
        <MenuItem
          fontSize="14px"
          textTransform="capitalize"
          lineHeight=" 45px"
          h="45px"
          border="none"
          pl="4"
          icon={<AiFillHome />}
          _hover={{ bg: 'rgba(64,198,255,1)', color: ' #fff' }}
        >
          Homepage
        </MenuItem>
        <MenuItem
          fontSize="14px"
          textTransform="capitalize"
          lineHeight=" 45px"
          h="45px"
          border="none"
          pl="4"
          icon={<AiFillPushpin />}
          _hover={{ bg: 'rgba(64,198,255,1)', color: ' #fff' }}
        >
          Custom Prints
        </MenuItem>
        <MenuItem
          fontSize="14px"
          textTransform="capitalize"
          lineHeight=" 45px"
          h="45px"
          border="none"
          pl="4"
          icon={<BsPhone />}
          _hover={{ bg: 'rgba(64,198,255,1)', color: ' #fff' }}
        >
          Free file check
        </MenuItem>
        <MenuItem
          fontSize="14px"
          textTransform="capitalize"
          lineHeight=" 45px"
          h="45px"
          border="none"
          pl="4"
          icon={<GrLanguage />}
          _hover={{ bg: 'rgba(64,198,255,1)', color: '#fff' }}
        >
          Graphic Design
        </MenuItem>
        <MenuItem
          fontSize="14px"
          textTransform="capitalize"
          lineHeight=" 45px"
          h="45px"
          border="none"
          pl="4"
          icon={<GoCalendar />}
          _hover={{ bg: 'rgba(64,198,255,1)', color: '#fff' }}
        >
          Mailing
        </MenuItem>
      </MenuList>
    </Menu>
    // <Box className="header">
    //   <button
    //     ref={anchorRef}
    //     id="composition-button"
    //     aria-controls={open ? 'composition-menu' : undefined}
    //     aria-expanded={open ? 'true' : undefined}
    //     aria-haspopup="true"
    //     onClick={handleToggle}
    //   >
    //     <Box>
    //       <AiOutlineUnorderedList />
    //     </Box>
    //     <span>ALL CATEGORY</span>
    //   </button>
    //   <Box
    //     open={open}
    //     // anchorEl={anchorRef.current}
    //     role={undefined}
    //     placement="bottom-start"
    //     transition
    //     // disablePortal
    //   >
    //     {({ TransitionProps, placement }) => (
    //       <Box
    //         {...TransitionProps}
    //         style={{
    //           transformOrigin:
    //             placement === 'bottom-start' ? 'left top' : 'left bottom',
    //         }}
    //       >
    //         <Menu>
    //           <useOutsideClick onClickAway={handleClose}>
    //             <Box
    //               autoFocusItem={open}
    //               id="composition-menu"
    //               aria-labelledby="composition-button"
    //               onKeyDown={handleListKeyDown}
    //             >
    //               <Box onClick={handleClose}>
    //                 <Box>
    //                   <AiFillHome />
    //                 </Box>
    //                 Homepage
    //               </Box>
    //               <Box onClick={handleClose}>
    //                 <Box>
    //                   <AiFillPushpin />
    //                 </Box>
    //                 Custom Prints
    //               </Box>
    //               <Box onClick={handleClose}>
    //                 <Box>
    //                   <BsPhone />
    //                 </Box>
    //                 Free file check
    //               </Box>
    //               <Box onClick={handleClose}>
    //                 <Box>
    //                   <GrLanguage />
    //                 </Box>
    //                 Graphic Design
    //               </Box>
    //               <Box onClick={handleClose}>
    //                 <Box>
    //                   <GoCalendar />
    //                 </Box>
    //                 Mailing
    //               </Box>
    //             </Box>
    //           </useOutsideClick>
    //         </Menu>
    //       </Box>
    //     )}
    //   </Box>
    // </Box>
  )
}
export default MenuListComposition
