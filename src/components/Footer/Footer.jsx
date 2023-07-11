import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="share">

                <FaFacebookF className='fa' />
                <FaTwitter className='fa' />
                <FaPinterest className='fa' />
                <FaLinkedin className='fa' />
                <FaInstagram className='fa' />

            </div>

            <div className="credit">
                &copy; copyright @ 2023 by <span><a href="https://github.com/Mbogo47">Ivy Mbogo</a></span>
            </div>
        </section>
    )
}

export default Footer