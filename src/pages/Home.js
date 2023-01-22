import { Box } from '@mui/system'
import React from 'react'
import CarouselComponent from '../components/carousel/Carousel'
import NavBar from '../components/navbar/NavBar'
import './Home.css'

const Home = () => {
  return (
    <div>
    <Box className='homeContainer'>
         <NavBar />
        <CarouselComponent /> 
    </Box>    
    </div>
  )
}

export default Home