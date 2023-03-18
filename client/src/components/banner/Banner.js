import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Image = styled(Box)`
background: url(https://www.mistay.in/travel-blog/content/images/2020/06/cover.jpg) center/55% repeat-x #000;
width:100%;
height:50vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Heading = styled(Typography)`
font-size:70px;
color:#ffffff;
line-height:1;


`;
const SubHeading = styled(Typography)`
font-size:20px;
background:#ffffff;
`


const Banner = () => {
  return (
   <>
   <Image>
    <Heading> BLOG</Heading>
    <SubHeading>Create Your Space</SubHeading>
   </Image>
   </>
  )
}

export default Banner