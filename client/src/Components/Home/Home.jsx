import React, { useRef } from "react";
import Categories from "../Categories/Categories";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/Footer";
import {useDynamicBannerSize} from "../../Hooks/GetDynamicWidth";
import ItemSlider from "../ItemSlider/ItemSlider";
import {Item1} from "../../Assets/Data/ItemSliderList";

const Home = () => {

  const BannerRef = useRef(null);
  const size = useDynamicBannerSize(BannerRef) - 5;
  let largeSize = Math.floor((size*65)/100) || Math.floor(window.innerWidth/2);
  let smallSize = Math.floor(largeSize/2);

  largeSize += 4;
  smallSize += 4;

  return (
    <div className="Home">
      <div className="CategoryWrap">
        <Categories />
      </div>
      <div className="HomeItemsWrap">
        <div className="SliderWrap">
          <div className="MainSlider">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              dynamicHeight={false}
            >
              <div className="Slide1 Slides">
                <img
                  alt="Slide 1"
                  src="https://www.teahub.io/photos/full/270-2705485_high-resolution-car-wallpapers-for-desktop.jpg"
                />
              </div>
              <div className="Slide2 Slides">
                <img
                  alt="Slide 2"
                  src="https://images.wallpaperscraft.com/image/single/lamborghini_gallardo_cars_car_79728_1280x720.jpg"
                />
              </div>
              <div className="Slide3 Slides">
                <img
                  alt="Slide 3"
                  src="https://cdn.motor1.com/images/mgl/kXejR/s3/fastest-cars-lead.jpg"
                />
              </div>
            </Carousel>
          </div>
          <div className="SecondSlider">
            <div className="SellWithUsWrap">
              <div className="GrowWithUs"></div>
              <div className="SellOnGrainMart"></div>
            </div>
          </div>
        </div>
        <div className="BannerWrap" ref={BannerRef}>
          <div className="Banner" style={{ paddingBottom: 5 }}>
            <div
              className="LargeBannerWrap"
              style={{ backgroundColor: "aliceblue" }}
            >
              <img
                alt="Buy Vegies&Fruits"
                src="https://www.jing.fm/clipimg/full/306-3060664_juice-organic-food-vegetable-fruit-fruits-and-vegetables.png"
                style={{ width: largeSize }}
              />
            </div>
            <div className="SmallBannerWrap">
              <img
                alt="Offer1"
                src="https://thumbs.dreamstime.com/b/buy-get-free-banner-sale-template-super-red-big-yellow-mega-black-summer-festivel-christmas-161908270.jpg"
                style={{ width: smallSize }}
              />
              <img
                alt="Offer2"
                src="https://freedesignfile.com/upload/2019/05/Natural-farm-milk-food-poster-design-vector-04.jpg"
                style={{ width: smallSize }}
              />
            </div>
          </div>
          <div className="Banner">
            <div className="SmallBannerWrap">
              <img
                alt="Offer3"
                src="https://static.vecteezy.com/system/resources/previews/003/398/158/non_2x/round-frame-made-of-fresh-vegetables-big-sale-advertising-vector.jpg"
                style={{ width: smallSize }}
              />
              <img
                alt="Offer4"
                src="https://images.all-free-download.com/images/graphiclarge/big_sale_banner_fruits_icons_decoration_6833966.jpg"
                style={{ width: smallSize }}
              />
            </div>
            <div className="LargeBannerWrap">
              <img
                alt="Buy Staples"
                src="https://researchoutreach.org/wp-content/uploads/2020/12/shutterstock_1861580353.jpg"
                style={{ width: largeSize }}
              />
            </div>
          </div>
        </div>
        <div className="ItemSliderWrap">
          <ItemSlider data={Item1} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;