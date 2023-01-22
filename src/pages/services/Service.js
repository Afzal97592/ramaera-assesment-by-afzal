import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import './service.css'

const Service = () => {
  return (
    <Box className='mainContainer'>
       <Box className='Top'>
         <Box className='polygon'>
            <img src={require('../../images/Polygon.png')} alt='polygon' className='polygonImg'/>
         </Box>
         <Container className='content'>
            <Typography variant='h3'
            className='h3Heading'
              sx={{
                textAlign:{lg:'center', md:'center', sx:'left'},
                fontSize:{xs:38,md:55,lg:75, },
                fontFamily:'Montserrat Alternates',
                fontWeight:450,
              }}
            >THE RAMAERA EXPANSION</Typography>
            <Typography
             sx={{
                textAlign:{lg:'center', md:'center', sx:'left'},
                color:'#FFFFFF',
                fontSize:{xs:18,md:28, lg:42},
                fontFamily:'Montserrat Alternates',
                fontWeight:400,
                marginTop:1,

              }}
            > We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
            </Typography>
         </Container>
       </Box>
    {/* Services section1 */}
       <Box className='service1'> 
           <Box className='serviceContent1' >
          <img src={require('../../images/line1.png')} alt='line' style={{display:'flex', width:'100%'}} />
           <Box className='contentContainer'>
             <Box className='leftImg'>
                <img src={require('../../images/tech.gif')} alt='tech' className='techImg' />
             </Box>
             <Box className='rightContent'>
                <Box className='rightTopContent'>
                    <Typography variant='h5'
                     sx={{
                        
                        fontFamily:'Montserrat Alternates',
                        fontSize:{lg:45,md:45, xs:22},
                        textAlign:{lg:'right',md:'left'},
                        width:{lg:'80%', md:'100%', xs:'100%'},
                        fontWeight:'600',
                        color:'#FFFFFF',
                     }}
                    >Unleashing the strength of <span
                    style={{color:'#BF5AE0'}}
                    >Technology</span></Typography>
                    <Box className='vectorImg'>
                        <img src={require('../../images/Vector.png')} alt='vector'/>
                    </Box>
                </Box>
               <Box className='TopPara'>
                 <Typography variant='p'
                  sx={{
                    fontFamily:'Montserrat Alternates',
                    color:'#ffffff',
                    fontSize:{lg:27,md:27, xs:16},
                    textAlignLast:{lg:'right',xs:'right'},
                    width:{lg:'80%', md:'100%', xs:'100%'},
                  }}
                 >We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.
                 </Typography><br/>
                 <button className='btn'>Read more</button>
               </Box>
             </Box>
           </Box>
           </Box>
           <img src={require('../../images/line1.png')} alt='line' className='line'  />
       </Box>

{/* service Section 2 */}
       <Box className='service2'> 
           <Box className='serviceContent2' >
          <img src={require('../../images/line2.png')} alt='line' className='line2' />
           <Box className='contentContainer'>
             <Box className='leftContent'>
                <Box className='rightTopContent'>
                <Box className='vector2Img'>
                        <img src={require('../../images/Vector2.png')} alt='vector'/>
                    </Box>
                    <Typography variant='h5'
                      className='heading3'
                     sx={{
                      fontSize:{lg:45,md:45, xs:27},
                      textAlign:{lg:'left',md:'left'},
                      width:{lg:'80%', md:'100%', xs:'100%'},
                        fontWeight:'600',
                        color:'#FFFFFF',
                     }}
                    >making <br /> accommodations easier
                    </Typography>
                </Box>
               <Box className='TopPara2'>
                 <Typography variant='p'
                  sx={{
                    fontFamily:'Montserrat Alternates',
                    color:'#ffffff',
                    fontSize:{lg:27,md:27, xs:16},
                    textAlignLast:{lg:'right',xs:'right'},
                    width:{lg:'80%', md:'100%', xs:'100%'},
                  }}
                 >Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices .
                 </Typography><br/>
                 <button className='btn2'>Read more</button>
               </Box>
             </Box>
             <Box className='rightImg'>
                <img src={require('../../images/harrise.gif')} alt='tech' className='harriseImg' />
             </Box>
           </Box>
           </Box>
           <img src={require('../../images/line2.png')} alt='line' className='line2'  />
       </Box>

       {/* sercice section3 */}

       <Box className='service1'> 
           <Box className='serviceContent1' >
          <img src={require('../../images/line1.png')} alt='line' className='line2' />
           <Box className='contentContainer'>
             <Box className='leftImg'>
                <img src={require('../../images/box.gif')} alt='box' className='techImg' />
             </Box>
             <Box className='rightContent'>
                <Box className='rightTopContent'>
                    <Typography variant='h5'
                     sx={{
                        fontFamily:'Montserrat Alternates',
                        fontSize:{lg:45,md:45, xs:27},
                        textAlign:{lg:'left',md:'left'},
                        width:{lg:'80%', md:'100%', xs:'100%'},
                        fontWeight:'600',
                        color:'#FFFFFF'
                     }}
                    >Packaging industry for bussines <span
                    style={{color:'#EACDA3'}}
                    >growth</span></Typography>
                    <Box className='vector3Img'>
                        <img src={require('../../images/Vector3.png')} alt='vector'/>
                    </Box>
                </Box>
               <Box className='TopPara'>
                 <Typography variant='p'
                  sx={{
                    fontFamily:'Montserrat Alternates',
                    color:'#ffffff',
                    fontSize:{lg:27,md:27, xs:16},
                    textAlignLast:{lg:'right',xs:'right'},
                    width:{lg:'80%', md:'100%', xs:'100%'},
                  }}
                 >We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority.
                 </Typography><br/>
                 <button className='btn'>Read more</button>
               </Box>
             </Box>
           </Box>
           </Box>
           <img src={require('../../images/line1.png')} alt='line' className='line2'  />
       </Box>

{/* Service Section 4 */}
       <Box className='service2'> 
           <Box className='serviceContent2' >
          <img src={require('../../images/line2.png')} alt='line' className='line2' />
           <Box className='contentContainer'>
             <Box className='leftContent'>
                <Box className='rightTopContent'>
                <Box className='vector4Img'>
                        <img src={require('../../images/Vector4.png')} alt='vector'/>
                    </Box>
                    <Typography variant='h5' className='heading4'
                     sx={{
                        fontFamily:'Montserrat Alternates',
                        fontSize:{lg:45,md:45, xs:27},
                        textAlign:{lg:'left',md:'left'},
                        width:{lg:'80%', md:'100%', xs:'100%'},
                        fontWeight:'600',
                        color:'#FFFFFF',
                     }}
                    >Offering the best with <br /> fMCG industry
                    </Typography>
                </Box>
               <Box className='TopPara2'>
                 <Typography variant='p'
                  sx={{
                    fontFamily:'Montserrat Alternates',
                    color:'#ffffff',
                    fontSize:{lg:27,md:27, xs:16},
                    textAlignLast:{lg:'right',xs:'right'},
                    width:{lg:'80%', md:'100%', xs:'100%'},
                  }}
                 >Ramaera FMCG industry has commenced an extensive range of FMCG to make your days more than ordinary. We plan to offer you nothing less than the best.
                 </Typography><br/>
                 <button className='btn2'>Read more</button>
               </Box>
             </Box>
             <Box className='rightImg'>
                <img src={require('../../images/offer.gif')} alt='offer' className='harriseImg' />
             </Box>
           </Box>
           </Box>
           <img src={require('../../images/line2.png')} alt='line' className='line2'  />
       </Box>


       {/* service section 5 */}
       <Box className='service1'> 
           <Box className='serviceContent1' >
          <img src={require('../../images/line1.png')} alt='line' className='line2' />
           <Box className='contentContainer'>
             <Box className='leftImg'>
                <img src={require('../../images/veg.gif')} alt='box' className='techImg' />
             </Box>
             <Box className='rightContent'>
                <Box className='rightTopContent'>
                    <Typography variant='h5'
                     sx={{
                        fontFamily:'Montserrat Alternates',
                        fontSize:{lg:45,md:45, xs:22},
                        textAlign:{lg:'right',md:'left'},
                        width:{lg:'80%', md:'100%', xs:'100%'},
                        fontWeight:'600',
                        color:'#FFFFFF'
                     }}
                    >Agri-business to bestow <br />
                    <span
                   className='heading5'
                    > Nature's Love</span></Typography>
                    <Box className='vector5Img'>
                        <img src={require('../../images/Vector5.png')} alt='vector'/>
                    </Box>
                </Box>
               <Box className='TopPara'>
                 <Typography variant='p'
                  sx={{
                    fontFamily:'Montserrat Alternates',
                    color:'#ffffff',
                    fontSize:{lg:27,md:27, xs:16},
                    textAlignLast:{lg:'right',xs:'right'},
                    width:{lg:'80%', md:'100%', xs:'100%'},
                  }}
                 >Our Agri-business industry is established to get you fresh and organic fruits and vegetables with the blessed with the touch of nature
                 </Typography><br/>
                 <button className='btn'>Read more</button>
               </Box>
             </Box>
           </Box>
           </Box>
           <img src={require('../../images/line1.png')} alt='line' className='line2'  />
       </Box>

{/* Service Section 6 */}
       <Box className='service2'> 
           <Box className='serviceContent2' >
          <img src={require('../../images/line2.png')} alt='line' className='line2' />
           <Box className='contentContainer'>
             <Box className='leftContent'>
                <Box className='rightTopContent'>
                <Box className='vector6Img'>
                        <img src={require('../../images/Vector6.png')} alt='vector'/>
                    </Box>
                    <Typography variant='h5' className='heading6'
                     sx={{
                        fontFamily:'Montserrat Alternates',
                        fontSize:{lg:45,md:45, xs:22},
                        textAlign:{lg:'right',md:'left'},
                        width:{lg:'80%', md:'100%', xs:'100%'},
                        fontWeight:'600',
                        color:'#FFFFFF',
                     }}
                    >Get all your essentials in <br /> one place
                    </Typography>
                </Box>
               <Box className='TopPara2'>
                 <Typography variant='p'
                  sx={{
                    fontFamily:'Montserrat Alternates',
                    color:'#ffffff',
                    fontSize:{lg:27,md:27, xs:16},
                    textAlignLast:{lg:'right',xs:'right'},
                    width:{lg:'80%', md:'100%', xs:'100%'},
                  }}
                 >Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes.
                 </Typography><br/>
                 <button className='btn2'>Read more</button>
               </Box>
             </Box>
             <Box className='rightImg'>
                <img src={require('../../images/phone.gif')} alt='phone' className='harriseImg' />
             </Box>
           </Box>
           </Box>
           <img src={require('../../images/line2.png')} alt='line' className='line2'  />
       </Box>

       <Box className='Top'>
         <Container className='content'>
            {/* <Typography variant='h3'
              style={{
                textAlign:'center',
                background: "-webkit-linear-gradient(45deg, #E65C00 10%, #F9D423 100%)",
                webkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize:75,
                fontFamily:'Montserrat Alternates',
                fontWeight:400
              }}
            >THE RAMAERA EXPANSION</Typography>
            <Typography
             style={{
                textAlign:'center',
                color:'#FFFFFF',
                fontSize:32,
                fontFamily:'Montserrat Alternates',
                fontWeight:400
              }}
            >The Ramaera Expansion
              We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
            </Typography> */}
         </Container>
         <Box className='polygon'>
            <img src={require('../../images/Polygon2.png')} alt='polygon' className='polygon2Img'/>
         </Box>
       </Box>
    </Box>
  )
}

export default Service