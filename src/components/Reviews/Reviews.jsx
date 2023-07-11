import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import './reviews.css';

const Reviews = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper(".review-slide", {
            loop: true,
            spaceBetween: 20,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
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
        <section className="review" id="review">
            <div className="swiper review-slide">
                <Swiper
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop
                >
                    <SwiperSlide>
                        <div className="slide">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus
                                quibusdam ea nam commodi.
                            </p>
                            <div className="user">
                                <img src="image/pic-1.png" alt="" />
                                <div className="info">
                                    <h3>john deo</h3>
                                    <span>happy client</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Rest of the slides */}

                </Swiper>
                <div className="swiper-button-next" onClick={handleNextSlide}></div>
                <div className="swiper-button-prev" onClick={handlePrevSlide}></div>
            </div>
        </section>
    );
}

export default Reviews;
