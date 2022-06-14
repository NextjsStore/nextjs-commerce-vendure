import React, { useEffect, useRef, useState } from 'react'
// import { countdown } from './countdowns'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const countdown = (secondsTime) => {
  const days = Math.floor(secondsTime / 86400)
  const hours = Math.floor(secondsTime / 3600)
  const minutes = Math.floor(secondsTime / 60)
  const seconds = secondsTime

  let h = 0
  let m = 0
  let s = 0

  if (hours > 0) {
    const tmp = days > 0 ? hours - 24 * days : hours
    if (tmp > 0) {
      h = tmp
    }
  }
  if (minutes > 0) {
    const tmp = hours > 0 ? minutes - 60 * hours : minutes
    if (tmp > 0) {
      m = tmp
    }
  }
  return {
    // days,
    // hours: h,
    // minutes: m,
    // seconds: s,
    seconds: secondsTime % 60,
    minutes: parseInt(secondsTime / 60, 10) % 60,
    hours: parseInt(secondsTime / (60 * 60), 10) % 24,
    days: parseInt(secondsTime / (60 * 60 * 24), 10),
  }
}

const TIME = 42 * 24 * 60 * 60
const CountDown = () => {
  const [time, setTime] = useState(TIME)
  const { days, hours, minutes, seconds } = countdown(time)

  useEffect(() => {
    const secTimer = setInterval(() => {
      setTime((prevState) => prevState - 1)
    }, 1000)
    return () => clearInterval(secTimer)
  }, [])

  return (
    <Grid style={{ display: 'flex', alignItems: 'center' }}>
      <Box style={styles.circle}>
        <Typography style={styles.value}>{days}</Typography>
        <Typography style={styles.label}>days</Typography>
      </Box>
      <Box style={styles.circle}>
        <Typography style={styles.value}>{hours}</Typography>
        <Typography style={styles.label}>hours</Typography>
      </Box>
      <Box style={styles.circle}>
        <Typography style={styles.value}>{minutes}</Typography>
        <Typography style={styles.label}>mins</Typography>
      </Box>
      <Box style={styles.circle}>
        <Typography style={styles.value}>{seconds}</Typography>
        <Typography style={styles.label}>secs</Typography>
      </Box>
    </Grid>
  )
}
export default CountDown

const styles = {
  circle: {
    width: 51,
    height: 51,
    borderRadius: 30,
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 15,
  },
  value: { margin: 0, fontSize: 20, fontWeight: 'bold', color: '#666' },
  label: {
    margin: 0,
    fontSize: 12,
    color: '#444',
    fontWeight: 'bold',
  },
}
