import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import './home.css';
import HomeCont from './HomeCont';

const Home = () => {
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
            <section className="home" id="home">
                <div className="swiper home-slider">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide one">
                            <HomeCont text="upto 50% off" heading="women's Fashion" button="shop now" />
                        </div>

                        <div className="swiper-slide slide two" >
                            <HomeCont text="upto 50% off" heading="men's fashion" button="shop now" />
                        </div>

                        <div className="swiper-slide slide three">
                            <HomeCont text="upto 50% off" heading="kid's fashion" button="shop now" />
                        </div>
                    </div>

                    <div className="swiper-button-next" onClick={handleNextSlide}></div>
                    <div className="swiper-button-prev" onClick={handlePrevSlide}>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home