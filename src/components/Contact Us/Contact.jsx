import {FaEnvelope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import "./contact.css";
import contactpic from '../../assets/contact.svg'

const Contact = () => {
  return (
      <section className="contact" id="contact">
          <h1 className="heading">
              <span>contact</span> us
          </h1>

          <div className="icons-container">
              <div className="icons">
                  <FaMapMarkerAlt className="icon" />
                  <h3>address</h3>
                  <p>Kutus 143-1010 Kerugoya</p>
              </div>

              <div className="icons">
                  <FaEnvelope className="icon" />
                  <h3>email</h3>
                  <p>ivy@gmail.com</p>
                  <p>mbogo@gmail.com</p>
              </div>

              <div className="icons">
                  <FaPhone className="icon" />
                  <h3>phone</h3>
                  <p>+123-456-7890</p>
                  <p>+111-222-3333</p>
              </div>
          </div>

          <div className="row">
             

              <div className="image">
                    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.623478986334!2d37.31768627412843!3d-0.5662437352612878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182629b5a37f6381%3A0x859cebe37dc37639!2sKirinyaga%20University!5e0!3m2!1sen!2ske!4v1697118456397!5m2!1sen!2ske"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
                </div>
             <form action="">
                  <h3>get in touch</h3>
                  <div className="inputBox">
                      <input type="text" placeholder="your name" />
                      <input type="email" placeholder="your email" />
                  </div>
                  <div className="inputBox">
                      <input type="number" placeholder="your number" />
                      <input type="text" placeholder="your subject" />
                  </div>
                  <textarea placeholder="your message" cols="30" rows="10"></textarea>
                  <input type="submit" value="send message" className="btn" />
              </form>

          </div>
      </section>
  )
}

export default Contact
