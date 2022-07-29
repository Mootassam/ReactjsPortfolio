import React, { useEffect, useState } from "react";
import contact1 from "../../assets/contact1.png";
import contact2 from "../../assets/contact2.png";
import { client, urlFor } from "../../client";

function Contact() {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    const query = '*[_type == "contact"]';
    client.fetch(query).then(async (res) => {
      await setContact(res);
    });
  }, []);

  return (
    <div className='app__contact' id='contact'>
      <div className='contact__header'>
        <span className='span__header'> Contact Me</span>
        <h3 className='h3__header'>I Want To Hear From You</h3>
        <p className='p__header'>
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>
      </div>

      {contact.map((item) => (
        <div className='contact__address'>
          <div className='contact__left'>
            <div className='left__address'>
              <div className='address__icon'>
                <i className='fa-solid fa-location-dot' />
              </div>
              <div className='address__detaill'>
                <h3>Address</h3>
                <span>{item.address}</span>
              </div>
            </div>
            <div className='left__email'>
              <div className='email__icon'>
                <i className='fa-solid fa-envelope' />
              </div>
              <div className='email__detaills'>
                <h3>Email</h3>
                <span> {item.email}</span>
              </div>
            </div>
            <div className='left__phone'>
              <div className='phone__icon'>
                <i className='fa-solid fa-phone' />
              </div>
              <div className='phone__detaills'>
                <h3>Phone</h3>
                <span> {item.phone}</span>
              </div>
            </div>
          </div>
          <div className='contact__right'>
            <div>
              <input type='text' placeholder='Your Name' />
              <input type='text' placeholder='Your Email' />
            </div>
            <div>
              <input type='text' placeholder='Your Phone ' />
              <input placeholder='Subject' type='text' />
            </div>
            <div>
              <textarea
                placeholder='Write Your message here'
                defaultValue={""}
              />
            </div>
            <div className='button'>Submit Now</div>
          </div>
          <div className='address__images'>
            <div className='images__left'>
              <img loading='lazy' src={contact1} alt='Image contact' />
            </div>
            <div className='images__right'>
              <img loading='lazy' src={contact2} alt='Image contact' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
