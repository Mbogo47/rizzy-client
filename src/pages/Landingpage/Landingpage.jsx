import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import './Landingpage.css';
import { CiSearch } from 'react-icons/ci';


const Landingpage = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.home-slider', {
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  });

  const handleNextSlide = () => {
    // Functionality for next slide button
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    // Functionality for previous slide button
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  return (
    <>
      <nav>

        <div className="logo">
          <span className="rizzy"> RIZZY</span>
          <span className="text">all the way</span>
        </div>

        <div className="search">
          <input type="search" name="search" placeholder="Search" />
          <CiSearch className="search-icon" />
        </div>

        <div className="auth">

          <button className="btn-primary">
            <span>Sign In</span>
          </button>

          <button className="btn-secondary">
            <span>Sign Up</span>
          </button>

        </div>

      </nav>

    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">

          <div className="swiper-slide slide one"
          >
            <div className="content">
              <span>upto 50% off</span>
              <h3>women's Fashion</h3>
              <a href="#" className="btn">
                shop now
              </a>
            </div>
          </div>

          <div className="swiper-slide slide two" >
            <div className="content">
              <span>upto 50% off</span>
              <h3>men's Fashion</h3>
              <a href="#" className="btn">
                shop now
              </a>
            </div>
          </div>

          <div
            className="swiper-slide slide three"

          >
            <div className="content">
              <span>upto 50% off</span>
              <h3>kid's Fashion</h3>
              <a href="#" className="btn">
                shop now
              </a>
            </div>
          </div>
        </div>

          <div className="swiper-button-next" onClick={handleNextSlide}></div>
          <div className="swiper-button-prev" onClick={handlePrevSlide}></div>
      </div>
    </section>
    </>
  );
};

export default Landingpage;
