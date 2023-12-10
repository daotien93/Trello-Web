import './App.css'
import Button from '@mui/material/Button'
import React from 'react'
import {
  useColorScheme
} from '@mui/material/styles'
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material'

function ModelSelect() {
  const handleChange = () => {
    console.log('Target')
  }
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value="light">Light</MenuItem>
    <MenuItem value="dark">Dark</MenuItem>
    <MenuItem value="system">System</MenuItem>
  </Select>
</FormControl>
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <React.Fragment>
      <ModelSelect />
      <ModeToggle />
      <hr/>
      <Button variant='contained'>Click buy smart phone</Button>
    </React.Fragment>
  )
}

export default App
