import { MenuItem, FormControl, InputLabel, Select, Container, Box } from '@mui/material'

function ModelSelect() {
    const handleChange = () => {
    }
    <FormControl fullWidth>
    <InputLabel id='demo-simple-select-label'>Age</InputLabel>
    <Select
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      label='Age'
      onChange={handleChange}
    >
      <MenuItem value='light'>Light</MenuItem>
      <MenuItem value='dark'>Dark</MenuItem>
      <MenuItem value='system'>System</MenuItem>
    </Select>
  </FormControl>
  }
  
const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main'}} >
      <Box sx={{ 
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
          <ModelSelect />
      </Box>

      <Box sx={{ 
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeigh,
        display: 'flex',
        alignItems: 'center'
      }}>
          Board Bar
      </Box>

      <Box sx={{ 
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeigh})`,
        display: 'flex',
        alignItems: 'center'
      }}>
          Board Content
      </Box>
    </Container>
  )
}

export default Board