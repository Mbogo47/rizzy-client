import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact Us/Contact';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Reviews from '../../components/Reviews/Reviews';
import './Landingpage.css';


const Landingpage = () => {
  return (
    <>
      <Header />
      <Home />
      <Banner />
      <Reviews />
      <Contact />
    </>
  );
};

export default Landingpage;
