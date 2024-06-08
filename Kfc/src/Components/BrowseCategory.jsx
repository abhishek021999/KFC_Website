import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import internation from '../assets/internation burger.jpg'
import match from '../assets/match.jpg'
import value from '../assets/value.jpg'
import boxmeal from '../assets/boxmeal.jpg'
import burger from '../assets/burger.jpg'
import chicken from '../assets/chicken.jpg'
import rice from '../assets/rice.jpg'
import viewall from '../assets/viewall.svg'
import { Link } from 'react-router-dom'


function BrowseCategory() {
    const Data=[
        {
            Image:internation,
            Heading:'INTERNATIONAL BURGER FEST'
        },
        {
            Image:match,
            Heading:'MATCH DAY COMBOS'
        },
        {
            Image:value,
            Heading:'VALUE LUNCH SPECIALS'
        },
        {
            Image:boxmeal,
            Heading:'BOX MEALS'
        },
        {
            Image:burger,
            Heading:'BURGERS'
        },
        {
            Image:chicken,
            Heading:'CHICKEN BUCKETS'
        },
        {
            Image:rice,
            Heading:'RICE BOWLZ'
        },
        {
            Image:viewall,
            Heading:'VIEW ALL MENU'
        }
    ]
    return (
        <>
            <div className="py-16 flex justify-between items-center w-[80%] m-auto md:auto md:py-16 md:flex md:justify-between md:items-center md:w-[80%] md:m-auto">
                <h1 className="text-[14px] font-extrabold   md:text-[35px] md:font-extrabold">BROWSE CATEGORIES</h1>
                <hr className="w-[50%] border-t-2 border-gray-300 md:w-[60%]" />
            </div>
            <Grid templateColumns={{base:'repeat(2, 1fr)',lg:'repeat(4,1fr)'}} w={{base:'90%',lg:'80%'}} m={'auto'} rowGap={6} mb={'120px'}>
            {Data.map((ele,i)=>{
                return(
                     <Link to={"/product"}><Card  w={{base:'90%',lg:'90%'}} bg={"rgb(248, 247, 245)"}>
                     <img src={ele.Image} alt="" className='rounded-t-md'/>   
                     <Stack m={'auto'} my='6' >
                         <Heading fontSize={{base:'12px',lg:'14px'}}  fontFamily={'National 2 Condense'} fontWeight={'800'}>{ele.Heading}</Heading>
                     </Stack> 
             </Card>
             </Link>
                )
            })}
               








               </Grid>
        </>
    )
}

export default BrowseCategory