import React, { useEffect, useRef, useState } from 'react'
import { Box, Text, Circle, Flex, Spacer } from '@chakra-ui/react'

const countdown = (secondsTime) => {
  const days = Math.floor(secondsTime / 86400)
  const hours = Math.floor(secondsTime / 3600)
  const minutes = Math.floor(secondsTime / 60)

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
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <Circle
        style={styles.circle}
        size="50px"
        bg="#fff"
        color="#666"
        border="1px solid #666"
      >
        <Text style={styles.value}>{days}</Text>
        <Text style={styles.label}> days</Text>
      </Circle>
      <Circle
        style={styles.circle}
        size="50px"
        bg="#fff"
        color="#666"
        border="1px solid #666"
      >
        <Text style={styles.value}>{hours}</Text>
        <Text style={styles.label}>hours</Text>
      </Circle>
      <Circle
        style={styles.circle}
        size="50px"
        bg="#fff"
        color="#666"
        border="1px solid #666"
      >
        <Text style={styles.value}>{minutes}</Text>
        <Text style={styles.label}>mins</Text>
      </Circle>
      <Circle
        style={styles.circle}
        size="50px"
        bg="#fff"
        color="#666"
        border="1px solid #666"
      >
        <Text style={styles.value}>{seconds}</Text>
        <Text style={styles.label}>secs</Text>
      </Circle>
    </Box>
  )
}
export default CountDown
const styles = {
  circle: {
    width: 51,
    height: 51,
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
