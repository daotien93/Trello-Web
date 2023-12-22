import { Button } from '@mui/base'
import { useColorScheme } from '@mui/material'
import React from 'react'

const ModelSelect = () => {
  const { mode, setMode } = useColorScheme()

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setMode(mode === 'light' ? 'light' : 'dark')
        }}
      >
      </Button>
    </React.Fragment>
  )
}

export default ModelSelect