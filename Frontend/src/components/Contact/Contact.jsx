import React, { useEffect, useState } from "react";
import contact1 from "../../assets/contact1.png";
import contact2 from "../../assets/contact2.png";
import { client, urlFor } from "../../client";
import ContactWrapper from "./ContactWrapper";

function Contact() {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    const query = '*[_type == "address"]';
    client.fetch(query).then(async (res) => {
      await setContact(res);
    });
  }, []);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { username, email, phone, subject, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  const style = {
    color: "red",
    padding: "0 0 12px 0",
  };

  return (
    <ContactWrapper>
      <div className='app__contact' id='contact'>
        <div className='contact__header'>
          <span className='span__header'> Contact Me</span>
          <h3 className='h3__header'>I Want To Hear From You</h3>
          <p className='p__header'>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>

        <div className='contact__address'>
          {contact.map((item) => (
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
          ))}
          <div className='contact__right'>
            {!isFormSubmitted ? (
              <>
                {(formData.email === "" || formData.message === "") && (
                  <p style={style}> Please Fill Required Fields</p>
                )}

                <div>
                  <input
                    type='text'
                    placeholder='Your Name'
                    name='username'
                    value={username}
                    onChange={handleChangeInput}
                  />
                  <input
                    type='text'
                    placeholder='Your Email (*) '
                    name='email'
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>

                <div>
                  <input
                    type='text'
                    placeholder='Your Phone '
                    name='phone'
                    value={phone}
                    onChange={handleChangeInput}
                  />
                  <input
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <textarea
                    placeholder='Write Your message here  (*) '
                    value={message}
                    name='message'
                    onChange={handleChangeInput}
                  />
                </div>
                {formData.email !== "" && formData.message !== "" && (
                  <div className='button' onClick={handleSubmit}>
                    {!loading ? "Send Message" : "Sending..."}
                  </div>
                )}
              </>
            ) : (
              <div>
                <h3 className='head-text'>Thank you for getting in touch!</h3>
              </div>
            )}
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
      </div>
    </ContactWrapper>
  );
}

export default Contact;
