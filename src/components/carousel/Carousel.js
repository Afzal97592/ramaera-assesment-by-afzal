import React from 'react'
import './carousel.css'
import { Box } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const CarouselComponent = () => {
  return (
    <Swiper
    spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
    >
      <SwiperSlide>
      <Box className='carouselContainer'>
        <Box className='left'>
          <TwitterIcon className='Icons' />
          <InstagramIcon className='Icons' />
          <FacebookIcon className='Icons' />
        </Box>
        <Box className='middle'
          sx={{
            alignItems:'center',
            marginTop:{lg:0, md:10, xs:8},
            marginLeft:3,
            marginRight:5,
            width:{lg:'100%', md:'100%', sx:'100%'},
            height:{xs:'100%'}
          }}
        >
            <Typography variant='h4' className='heading' sx={{
                 fontSize:{lg:107, md:90, xs:50},
                 fontWeight:600,
                 width:{lg:'70%', md:'100%', xs:'100%'},
                 height:{lg:250, md:250, xs:140},
                 marginLeft:{lg:25,},
                 fontFamily:'Montserrat Alternates',
                 alignItems:{lg:'center'},
            }}>RAMAERA INDUSTRIES</Typography>
            <Typography variant='p6'
            className='para'
              sx={{
                color:'white',
                fontSize:{lg:44, md:32, xs:22},
                width:{lg:'50%', md:'90%', xs:'100%'},
                margin:5,
                fontFamily:'Montserrat Alternates',
              }}
            >An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
            </Typography> <br/>
            <button className='button'>Explore more</button>
        </Box>
        {/* <Box className='right'>
        </Box> */}
    </Box>
      </SwiperSlide>

      <SwiperSlide>
      <Box className='carouselContainer'>
        <Box className='left'>
          <TwitterIcon className='Icons' />
          <InstagramIcon className='Icons' />
          <FacebookIcon className='Icons' />
        </Box>
        <Box className='middle'
          sx={{
            alignItems:'center',
            marginTop:{lg:0, md:10, xs:8},
            marginLeft:3,
            marginRight:5,
            width:{lg:'100%', md:'100%', sx:'100%'},
            height:{xs:'100%'}
          }}
        >
            <Typography variant='h4' className='heading' sx={{
                 fontSize:{lg:107, md:90, xs:50},
                 fontWeight:600,
                 width:{lg:'70%', md:'100%', xs:'100%'},
                 height:{lg:250, md:250, xs:140},
                 marginLeft:{lg:25,},
                 fontFamily:'Montserrat Alternates',
                 alignItems:{lg:'center'},
                 marginTop:{lg:10}
            }}>RAMAERA INDUSTRIES</Typography>
            <Typography variant='p6'
            className='para'
              sx={{
                color:'white',
                fontSize:{lg:44, md:32, xs:22},
                width:{lg:'50%', md:'90%', xs:'100%'},
                margin:5,
                fontFamily:'Montserrat Alternates',
              }}
            >An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
            </Typography> <br/>
            <button className='button'>Explore more</button>
        </Box>
        {/* <Box className='right'>
        </Box> */}
    </Box>
      </SwiperSlide>

      <SwiperSlide>
      <Box className='carouselContainer'>
        <Box className='left'>
          <TwitterIcon className='Icons' />
          <InstagramIcon className='Icons' />
          <FacebookIcon className='Icons' />
        </Box>
        <Box className='middle'
          sx={{
            alignItems:'center',
            marginTop:{lg:0, md:10, xs:8},
            marginLeft:3,
            marginRight:5,
            width:{lg:'100%', md:'100%', sx:'100%'},
            height:{xs:'100%'}
          }}
        >
            <Typography variant='h4' className='heading' sx={{
                 fontSize:{lg:107, md:90, xs:50},
                 fontWeight:600,
                 width:{lg:'70%', md:'100%', xs:'100%'},
                 height:{lg:250, md:250, xs:140},
                 marginLeft:{lg:25,},
                 fontFamily:'Montserrat Alternates',
                 alignItems:{lg:'center'},
                 marginTop:{lg:10}
            }}>RAMAERA INDUSTRIES</Typography>
            <Typography variant='p6'
            className='para'
              sx={{
                color:'white',
                fontSize:{lg:44, md:32, xs:22},
                width:{lg:'50%', md:'90%', xs:'100%'},
                margin:5,
                fontFamily:'Montserrat Alternates',
              }}
            >An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
            </Typography> <br/>
            <button className='button'>Explore more</button>
        </Box>
        {/* <Box className='right'>
        </Box> */}
    </Box>
      </SwiperSlide>

         
    </Swiper>
  )
}
 
export default CarouselComponent