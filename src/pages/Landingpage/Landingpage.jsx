import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact Us/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Reviews from '../../components/Reviews/Reviews';
import './landingpage.css';


const Landingpage = () => {
  return (
    <>
      <Header />
      <Home />
      <Banner />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Landingpage;
