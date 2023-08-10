import BannerImg from '../../assets/images/banner-img.jpg'
import HoverCarousel from "hover-carousel";
import * as React from 'react';
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'

import '../../assets/css/navbar.css'




const Banner = () => {
  return (
    <div className="banner-outer">
        <div className='row banner-inner'>
            <div className='col-sm-9 banner-left'> 

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img className='carousel-img' src={img1} alt="First slide"  />
                    </div>
                    <div class="carousel-item">
                    <img className='carousel-img' src={img2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                    <img className='carousel-img' src={img3} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                
            </div>
            <div col-sm-3 className='banner-right'>
                <img src={BannerImg} className='banner-img' />
            </div>
        </div>

    </div>
  );
};

export default Banner;
