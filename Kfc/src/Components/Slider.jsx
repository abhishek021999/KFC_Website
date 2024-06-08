import { Box, Flex } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

function Slider() {
  const Data=[
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=45.04",
      Title:'FREE CHICKEN',
      Para:"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=45.04",
      Title:'ADD 2 PC HOT N',
      Para:"Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more.",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=45.04",
      Title:'UPTO RS 100 OFF O...',
      Para:"Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=45.04",
      Title:'GET FLAT RS.75 OFF',
      Para:"GET FLAT RS.75 OFF ON A CART VALUE OF RS.599 OR ABOVE",
    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=45.04",
      Title:'FREE POPCORN...',
      Para:"FREE POPCORN (MED) ON A CART VALUE OF 499 OR MORE. FRIDAY ONLY.",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=45.04",
      Title:'FREE 1PC CHICKEN.',
      Para:"FREE 1PC CHICKEN ON A CART VALUE OF 499 OR MORE. FRIDAY ONLY.",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=45.04",
      Title:' FREE 3PC STRIPS ON...',
      Para:"FREE 3PC STRIPS ON A CART VALUE OF 499 OR MORE. FRIDAY ONLY.",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYVZINGER.jpg?ver=45.04",
      Title:'FREE VEG ZINGER ON...',
      Para:"FREE VEG ZINGER ON A CART VALUE OF 499 OR MORE. FRIDAY ONLY.",

    },
    {
      Image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=45.04",
      Title:'FREE FRIES (MED)....',
      Para:"FREE FRIES (MED) ON A CART VALUE OF 499 OR MORE. FRIDAY ONLY..",

    },

  ]
  return (
    <>
      <div className='bg-black'>
        <Flex direction="row" justifyContent={{ sm: 'center', lg: "left" }} gap={3} pl={{ lg: '200px' }} mb={'50px'}>
          <Box bg="rgb(228,0,43)" width="15px" height="50px" mx="2px"></Box>
          <Box bg="rgb(228,0,43)" width="15px" height="50px" mx="2px"></Box>
          <Box bg="rgb(228,0,43)" width="15px" height="50px" mx="2px"></Box>
        </Flex>

        <div className='flex flex-col items-center justify-center gap-3  lg:flex lg:flex-row lg:items-center lg:justify-around lg:gap-0 pb-[50px] '>
          <h2 className='text-[rgb(255,255,255)] lg:text-4xl font-bold'>EXCLUSIVE OFFERS FOR YOU</h2>
          <Link className='flex items-center text-[rgb(255,255,255)]'> <span>View all Deals</span> <span> <IoIosArrowRoundForward /></span></Link>
        </div>





        <div className="h-[600px] w-[75%] m-auto "> {/* Tailwind class for setting height */}
          <Swiper
            slidesPerView={2}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            {Data.map((ele)=>{
              return(
                <>
                   <SwiperSlide className='h-[600px]'> {/* Tailwind class for setting height */}
              <div className="max-w-sm  border rounded-lg shadow-lg bg-slate-300">
                <div className="p-4">
                  <img
                    src={ele.Image}
                    alt="Green double couch with wooden legs"
                    className="rounded-lg"
                  />
                  <div className="mt-2 space-y-3">
                    <h1 className="text-3xl text-red-700 font-bold text-center">{ele.Title}</h1>
                    <p className='text-center'>
                      {ele.Para}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center px-8 space-x-2">
                <Link className='text-black font-semibold underline'>View Details</Link>
                  <button className=" text-black px-4 py-2 font-semibold  rounded-2xl border">Apply Offers</button>
                </div>
              </div>
            </SwiperSlide>

                
                </>
              )
            })}
           
           
          </Swiper>
        </div>

      </div>
    </>
  )
}

export default Slider