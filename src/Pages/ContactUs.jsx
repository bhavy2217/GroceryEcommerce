import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the form data to a backend or displaying it
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4 mt-3" style={{color:'#C9A07A',fontWeight: 'bold'}}>
          Contact Us
        </h2>
        <p className="text-center w-responsive  mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row ">
          <div className="col-md-6 mb-md-0 mb-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn" style={{color:'#DDD2C6',fontWeight: 'bold',backgroundColor:'#8E4739'}}>Send</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 text-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224291.94857658225!2d76.96195164442007!3d28.552891231750348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2afb1491c5f%3A0x78a0ff38a88dffca!2sPMO%20(%20Prime%20Minister%20Office)%20Official!5e0!3m2!1sen!2sin!4v1708081806246!5m2!1sen!2sin" width="100%" height="450" style={{border:"0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
