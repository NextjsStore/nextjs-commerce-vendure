import React, { useEffect, useRef, useState } from 'react'
// import { countdown } from "../utils/countdown";
import { countdown } from './countdowns'
import { Box, Text, Circle, Flex, Spacer } from '@chakra-ui/react'
const TIME = 42 * 24 * 60 * 60

export default function CountDown() {
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
      <Circle size="50px" bg="#fff" color="#666" border="1px solid #666">
        <Text>{days}</Text>
        <Text> days</Text>
      </Circle>
      <Circle size="50px" bg="#fff" color="#666" border="1px solid #666">
        <Text>{hours}</Text>
        <Text>hours</Text>
      </Circle>
      <Circle size="50px" bg="#fff" color="#666" border="1px solid #666">
        <Text>{minutes}</Text>
        <Text>mins</Text>
      </Circle>
      <Circle size="50px" bg="#fff" color="#666" border="1px solid #666">
        <Text>{seconds}</Text>
        <Text>secs</Text>
      </Circle>
    </Box>
  )
}
