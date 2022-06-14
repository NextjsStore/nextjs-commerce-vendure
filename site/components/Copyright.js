import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import paymentImages from '../assets/payment.png'
import { makeStyles } from '@material-ui/core/styles'
const colorHover = '#40c6ff'
const colorDefaul = '#666'
const colorBorder = '#f4f4f4'

const Item = () => {}
const useStyle_copyright = makeStyles({
  Copyright: {
    borderTop: ' 1px solid',
    borderColor: `${colorBorder}`,
    color: `${colorDefaul}`,
    backgroundColor: '#fff',
    padding: '10px 0px',
    marginTop: ' 7px',
    '& p': {
      padding: '0px',
      margin: '0px',
      '& a': {
        color: `${colorHover}`,
      },
    },
  },
  payment: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'left',
      marginTop: '30px',
    },
  },
})
const Copyright = () => {
  const classes = useStyle_copyright()
  return (
    <div className={classes.Copyright}>
      <React.Fragment>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <p>
                  Estore - Designed by{' '}
                  <a href="http://netbasejsc.com/">Netbase JSC</a> . Copyright ©
                  2010 - 2023. All Rights Reserved.
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <div className={classes.payment}>
                  <img src={paymentImages.src} />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  )
}
export default Copyright
