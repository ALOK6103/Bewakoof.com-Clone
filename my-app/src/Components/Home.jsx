import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
//import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

//{/* Navbar */}

const Navbar=()=>{
  const handleClick = () => {

    window.location.href = "/mens"
    console.log("hello")
  }

  const handleClickHome = () => {

    window.location.href = "/"
    console.log("hello")
  }
  return(
    <div style={{ width: "98.5%", margin: "auto", display: "flex", justifyContent: "space-between", paddingLeft: "10px", paddingRight: "10px", marginBottom: "0px", backgroundColor: "  #f9eee5  ", top: "0px", position: "sticky", zIndex:"1" }}>
    <div style={{ width: "150px", height: "50px", marginTop: "13px" }}>
      <img src='https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg' alt="pic" />
    </div>
    <div style={{ marginTop: "15px" }} onClick={handleClickHome}>Home</div>
    <div style={{ marginTop: "15px" }} onClick={handleClick}>Mens</div>
    <div style={{ marginTop: "15px" }}>Womens</div>
    <div style={{ marginTop: "12px" }}><Button colorScheme='orange'>Login</Button></div>
    <div style={{ marginTop: "12px", marginLeft: "-150px" }}><button><img style={{ width: "35px", height: "35px", marginLeft: "80px" }} src='https://img.icons8.com/ios-glyphs/512/shopping-cart.png' alt='pic' /></button></div>
  </div>
  )
}

export {Navbar}

//{/* Navbar */}





export default function Home() {
  
  

  const cards = [
    {
      image: 'https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg',
      image1: 'https://images.bewakoof.com/uploads/grid/app/oof-sale-1x1-common-1670588740.gif',
      image2: 'https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg'

    },
    {
      image: 'https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg',
      image1: 'https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-copy-04-1670505869.jpg',
      image2: 'https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg'
    }

  ];

  return (

    <div>

      <Flex gap={3} pl={3} pr={3} >

        <Box
          position={'relative'}
          height={'520px'}
          width={'full'}
          w="50%"
          overflow={'hidden'}>
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}

          {/* Slider */}
          <Slider {...settings} >

            {cards.map((card, index) => (
              <Flex >
                <Box
                  key={index}
                  height={'lg'}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}

                />
              </Flex>
            ))}
          </Slider>
        </Box>
        <Box
          position={'relative'}
          height={'520px'}
          width={'full'}
          w="50%"
          overflow={'hidden'}>
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}

          {/* Slider */}
          <Slider {...settings} >

            {cards.map((card, index) => (
              <Flex >
                <Box
                  key={index}
                  height={'lg'}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image1})`}

                />
              </Flex>
            ))}
          </Slider>
        </Box>



        <Box
          position={'relative'}
          height={'520px'}
          width={'full'}
          w="50%"
          overflow={'hidden'}>
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}

          {/* Slider */}
          <Slider {...settings} >

            {cards.map((card, index) => (
              <Flex >
                <Box
                  key={index}
                  height={'lg'}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image2})`}

                />
              </Flex>

            ))}
          </Slider>
        </Box>
      </Flex>


      <div style={{ width: "98.5%", margin: "auto" }}>
        <div>
          <img style={{ width: "100%" }} src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg' alt="pic" />
        </div>
        <div style={{ display: "flex", margin: "auto", justifyContent: "center", marginTop: "10px" }}>
          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>New Arrivals</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>Hot Deals</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1669138226.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>Bestsellers</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>Collabration</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>Last Size</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>Plus Size</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg' alt="pic" />
            <p style={{ fontSize: "12px" }}>Customization</p>
          </div>

          <div >
            <img style={{ height: "200px" }} src='https://images.bewakoof.com/uploads/grid/app/image-1668598708.png' alt="pic" />
            <p style={{ fontSize: "12px" }}>Offers</p>
          </div>

        </div>
      </div>
      <div style={{display:"flex",margin:"auto",justifyContent:"center",width:"99.5%",marginTop:"40px"}}>
        <div>
          <img style={{width:"747px"}} src='https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Men-1670938024.jpg' alt="pic" />
        </div>
        <div>
          <img style={{width:"747px"}} src='https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Women-1670938025.jpg' alt="pic" />
        </div>
      </div>

      <div style={{width:"99.5%",margin:"auto",justifyContent:"center",marginTop:"20px"}}>
        <h1 style={{fontSize:"22px"}}>POPULAR CATEGORIES</h1>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div>
            <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668765004.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670504700.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670504700.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg' alt='pic' />
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div>
            <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleevetees-1668773243.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-c-1670923575.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-4-1670504697.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-6-1670504698.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-5-1670504699.jpg' alt='pic' />
          </div>
          <div>
          <img src='https://images.bewakoof.com/uploads/grid/app/category-box-new-boyfriend-tees-1668773241.jpg' alt='pic' />
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

