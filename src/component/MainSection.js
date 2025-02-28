import React from "react";
import { bannerImages } from "../constants";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";

const MainSection = () => {
  const isMobile = useMediaQuery("(min-width:768px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
  };

  return (
    <section id="home" className="w-full overflow-hidden">
      {Array.isArray(bannerImages) && bannerImages.length > 0 ? (
        <Slider {...settings}>
          {bannerImages?.map((img) => (
            <img
              key={img}
              src={isMobile ? img.desktopImg : img.mobileImg}
              alt="Banner Images"
              height={724}
              width={1400}
              className="object-cover h-[100vh]"
            />
          ))}
        </Slider>
      ) : (
        <div className="h-[80vh] md:h-[762px] bg-secondary" />
      )}
    </section>
  );
};

export default MainSection;
