import { sliderImgs } from "../utils/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="w-3/4">
        <div className="overflow-y-hidden">
          <Slider {...settings}>
            <div>
              <img src={sliderImgs[0]} alt="" className="w-full" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[1]} alt="" className="w-full" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[2]} alt="" className="w-full" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
