import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
const colorHover = '#40c6ff'
const colorDefaul = '#666'

const useStyle_menuMain = makeStyles({
  navmenu: {
    padding: '0px',
    margin: '0px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    minHeight: '64px',
    '& li': {
      float: 'left',
      listStyle: 'none',
      display: 'inline-block',
      '& a': {
        color: `${colorDefaul}`,
        padding: ' 0px 22px',
        fontSize: '16px',
        fontFamily: 'Mulish,sans-serif',
        textTransform: 'uppercase',
        '&:hover': {
          color: `${colorHover}`,
        },
      },
      '&:first-child': {
        '& a': {
          paddingLeft: '0px',
        },
      },
    },
  },
  hamburger: {
    display: 'none',
  },
  bar: {
    display: 'block',
    width: '24px',
    height: '3px',
    margin: '5px auto',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#222222',
  },
  '@media (max-width: 899px) ': {
    navbar: {
      position: 'relative',
    },
    navmenu: {
      display: 'block',
      position: 'absolute',
      right: '0px',
      top: '100px',
      flexDirection: 'column',
      backgroundColor: '#fff',
      width: ' 100%',
      textAlign: 'left',
      maxWidth: '270px',
      minWidth: '270px',
      transition: '0.3s',
      boxShadow: ' 0 10px 27px rgba(0, 0, 0, 0.05)',
      opacity: '0',
      padding: ' 0px 10px',
      '&.active': {
        top: '44px',
        opacity: '1',
        zIndex: '100',
      },
      '& li': {
        float: 'none',
        display: 'block',
        height: '40px',
        lineHeight: '40px',
        '& a': {
          padding: '0px',
          fontSize: '14px',
        },
      },
    },
    hamburger: {
      position: 'absolute',
      display: 'block',
      cursor: 'pointer',
      right: '0px',
      top: '10px',
      padding: '0px',
      backgroundColor: '#fff',
      border: 'none',
      '&.active': {
        outline: 'none',
        '& span:nth-child(1)': {
          transform: 'translateY(8px) rotate(45deg)',
        },
        '& span:nth-child(2)': {
          opacity: '0',
        },
        '& span:nth-child(3)': {
          transform: 'translateY(-8px) rotate(-45deg)',
        },
      },
    },
  },
})

const ListPages = () => {
  const classes = useStyle_menuMain()
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <nav className={classes.navbar}>
        <ul
          className={
            isOpen === false
              ? `${classes.navmenu}`
              : `${classes.navmenu}` + ' ' + `active`
          }
        >
          <li className={classes.navitem}>
            <Link href="/">
              <a className={classes.navlink}>Home</a>
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link href="/shop">
              <a className={classes.navlink}>Shop</a>
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link href="/about">
              <a className={classes.navlink}>About</a>
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link href="/contact">
              <a className={classes.navlink}>Contact</a>
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link href="/myaccount">
              <a className={classes.navlink}>My Account</a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? `${classes.hamburger}`
              : `${classes.hamburger}` + ' ' + `active`
          }
          onClick={openMenu}
        >
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </button>
      </nav>
    </>
  )
}
export default ListPages
