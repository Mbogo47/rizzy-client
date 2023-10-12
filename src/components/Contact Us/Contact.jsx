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
            
              <div className="image">
                    <img src ={contactpic} alt="" />
                </div>
          </div>
      </section>
  )
}

export default Contact
