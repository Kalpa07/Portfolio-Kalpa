import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        serviceId ,
        templateId ,
        e.target,
        publicKey
      )
      .then(
        (result) => {
          console.log(result);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert('Error sending message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-row w-full items-center justify-center gap-[60px]">
      <div className="p-2">
        <h2 className="text-primary text-6xl w-150">
          Paper planes, pixels, and possibilities!
        </h2>
        <hr className="w-150 text-sm ml-[20px] mb-5 mt-5 text-text"></hr>
        <p className="text-text w-180 text-2xl">
          Have an idea flying around in your mind? Let’s catch it together. <br />
          I’m just a message away — say{' '}
          <span className="italic font-poppins text-3xl bolder">Hi!</span> and
          let’s turn your vision into something beautiful.
        </p>
      </div>
      <div className="flex flex-col p-2">
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className="flex flex-row w-120 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-ghost w-full input-lg border-0 border-b border-b-gray-700"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                className="input input-ghost w-full input-lg border-0 border-b border-b-gray-700"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-ghost mt-10 w-120 input-lg border-0 border-b border-b-gray-700"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="textarea textarea-ghost input-lg w-120 border-0 border-b border-b-gray-700 mt-10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="text-text hover:cursor-pointer bg-primary hover:scale-105 transform transition-transform duration-300 text-xl hover:border p-2 px-5 rounded-3xl w-40 mt-10"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
