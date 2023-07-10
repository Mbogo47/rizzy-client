import bannerone from '../../assets/shop_banner_img1.jpg';
import bannertwo from '../../assets/shop_banner_img2.jpg';
import './banner.css';

const Banner = () => {
    return (
        <section className="banner-container">
            <div className="banner">
                <img src={bannerone} alt="" />
                <div className="content">
                    <span>special offer</span>
                    <h3>upto 50% off</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

            <div className="banner">
                <img src={bannertwo} alt="" />
                <div className="content">
                    <span>special offer</span>
                    <h3>upto 50% off</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>
        </section>
    );
};



export default Banner