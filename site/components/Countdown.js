import React, { useEffect, useRef, useState } from "react";
// import { countdown } from "../utils/countdown";
import { countdown } from './countdowns';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const TIME = 42 * 24 * 60 * 60;

export default function CountDown() {
  const [time, setTime] = useState(TIME);
  const { days, hours, minutes, seconds } = countdown(time);

  useEffect(() => {
    const secTimer = setInterval(() => {
      setTime((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(secTimer);
  }, []);

  return (
    <Grid style={{ display: "flex", alignItems: "center" }}>
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
  );
}

const styles = {
  circle: {
    width: 51,
    height: 51,
    borderRadius: 30,
    backgroundColor: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginRight: 15,
  },
  value: { margin: 0, fontSize: 20, fontWeight: "bold", color: "#666" },
  label: {
    margin: 0,
    fontSize: 12,
    color: '#444',
    fontWeight: 'bold',
  },
};
