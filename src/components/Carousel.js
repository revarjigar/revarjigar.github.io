import React, {Component} from 'react';
// import Slider from "react-slick";
import './Carousel.css';

var ac = '/static/assets/ac@3x.png';
var astoria = '/static/assets/astoria@3x.png';
var avo = '/static/assets/aco@3x.png';
var bike = '/static/assets/bike@3x.png';
var ch = '/static/assets/xl@3x.png';
var cleanz = '/static/assets/hc@3x.png';
var duo = '/static/assets/duo@3x.png';
var fc = '/static/assets/fc@3x.png';
var fish = '/static/assets/fish@3x.png';
var nw = '/static/assets/newway@3x.png';
var pan = '/static/assets/panfish@3x.png';
var presto = '/static/assets/presto@3x.png';
var select = '/static/assets/select@3x.png';
// var sf = '/static/assets/stamford@3x.png';
var sn = '/static/assets/sn@3x.png';
var sos = '/static/assets/sos@3x.png';
var star = '/static/assets/star@3x.png';
// var tlc = '/static/assets/tlc@3x.png';
var wrench = '/static/assets/wrench@3x.png';
var edu = '/static/assets/edu@3x.png';
var ea = '/static/assets/ea@3x.png';
var ss = '/static/assets/shengsiong@3x.png';

const PrevArrow = (props) => {
  const {style, onClick} = props;
  return (
    <div className="arrow-left-container">
      <div className="arrow-left"
           style={{...style, display: "block", width: 20, height: 20}}
           onClick={onClick}/>
    </div>
  );
};
const NextArrow = (props) => {
  const {style, onClick} = props;
  return (
    <div className="arrow-right-container">
      <div className="arrow-right"
           style={{...style, display: "block", width: 20, height: 20}}
           onClick={onClick}/>
    </div>
  );
};

var data = [astoria, avo, bike, ch, cleanz, duo, fc,
  fish, nw, pan, presto, select, sn, sos, star, wrench, ea, edu, ss];

class MerchantCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ],
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
    };
    return (
      <div className="carousel-parent">
        <h1 className="font-medium carousel-header">
          <a href="">Download my resume</a>
        </h1>

        {/*<Slider {...settings} className="market-carousel">*/}
          {/*<div className="carousel-item">*/}
            {/*<img src="/static/assets/ac@3x.png" className="carousel-item" alt={ac}/>*/}
          {/*</div>*/}
          {/**/}
          {/*{data.map((i, index) =>*/}
            {/*<div className="carousel-item" key={index}>*/}
              {/*<img src={i} className="carousel-item" alt={i}/>*/}
            {/*</div>*/}
          {/*)}*/}
        {/*</Slider>*/}
      </div>
    );
  }
}

export default MerchantCarousel;