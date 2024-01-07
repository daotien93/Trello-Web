import React from 'react'
import Board from './pages/Bords/_id'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <React.Fragment>
      <Board />
      <hr/>
      <ModeToggle />
    </React.Fragment>
  )
}

export default App
