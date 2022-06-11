import * as React from 'react'
import { Box, Image, useTheme } from '@chakra-ui/react'

import MobileStepper from '@mui/material/MobileStepper'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

// makestyle

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    imgPath: '/assets/banner1.png',
  },
  {
    imgPath: '/assets/banner2.png',
  },
  {
    imgPath: '/assets/banner3.png',
  },
]

function SwipeableTextMobileStepper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length
  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image component="Image" src={step.imgPath} w="100%" />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  )
}

export default SwipeableTextMobileStepper
