import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import './reviews.css';
import ReviewsCont from './ReviewsCont';
import img1 from '../../assets/pic-1.png';
import img2 from '../../assets/pic-2.png';
import img3 from '../../assets/pic-3.png';
import img4 from '../../assets/pic-4.png';
import img5 from '../../assets/pic-5.png';
import img6 from '../../assets/pic-6.png';

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
            <h1 className="heading"> client's <span>review</span> </h1>
            <div className="swiper review-slide">
                <div className="swiper-wrapper">
                    <ReviewsCont p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus quibusdam ea nam commodi" img={img1} name="Alex Wennberg" text="happy client"  />

                    <ReviewsCont p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus quibusdam ea nam commodi" img={img2} name="Emily Blunt" text="happy client"  />

                    <ReviewsCont p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus quibusdam ea nam commodi" img={img3} name="Zayne Malik" text="happy client"  />

                    <ReviewsCont p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus quibusdam ea nam commodi" img={img4} name="Scarlett Johanson" text="happy client"  />

                    <ReviewsCont p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus quibusdam ea nam commodi" img={img5} name="John Krasinski" text="happy client"  />

                    <ReviewsCont p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam deserunt praesentium natus quibusdam ea nam commodi" img={img6} name="Emilia Clarke" text="happy client"  />
                </div>


                <div className="swiper-button-next" onClick={handleNextSlide}></div>
                <div className="swiper-button-prev" onClick={handlePrevSlide}></div>
            </div>
        </section>
    );
}

export default Reviews;
