import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Button from '@mui/material/Button'
import { Box, Button, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Container>
        <Paper>
          <Box>
            <CheckCircleIcon />
          </Box>
          <Box>
            <Text component="h4" variant="h4">
              Order confirmed
            </Text>
          </Box>
          <Box>
            <Text component="p" variant="p">
              You order is confirmed. You will receive an order confirmation
              email/SMS shortly with the expected delivery date for your items.
            </Text>
          </Box>
          <Box>
            <Box>
              <Link href="/shop">
                <Button variant="contained">Continue Shopping</Button>
              </Link>
            </Box>
            <Box>
              <Link href="/orders">
                <Button variant="contained">View Order</Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
