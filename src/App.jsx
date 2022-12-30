import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import { Box } from '@mui/system';


export default function App() {
  
  return (
    <>
      <Box sx={{backgroundColor: 'lightgray', margin:'-10px'}}>
        <Container>
          <Navbar />
          <Outlet />
        </Container>
      </Box>
    </>
  );
}