import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setLoading(false);
      })
      .catch(() => {
        alert("Error sending message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-[60px]">

      <div className="p-5 sm:p-2">
        <h2 className="theme-primary-color text-3xl sm:text-6xl w-90 sm:w-150">
          Paper planes, pixels, and possibilities!
        </h2>

        <hr className="w-80 sm:w-150 my-6 theme-text" />

        <p className="w-90 sm:w-180 text-lg sm:text-2xl">
          Have an idea flying around in your mind? Let’s catch it together.
          <br />
          I’m just a message away, say{" "}
          <span className="italic font-poppins text-xl sm:text-3xl">
            Hi!
          </span>{" "}
          and let’s turn your vision into something beautiful.
        </p>

        <span className="block mt-4 text-lg sm:text-xl">
          Or, if you prefer,{" "}
          <a
            href="mailto:kalpa.teli07@gmail.com"
            className="underline"
          >
            email me directly!
          </a>
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col p-2">
        <div className="flex flex-row w-80 sm:w-120 gap-4">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-ghost w-full input-lg border-0 border-b border-b-gray-700"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="input input-ghost w-full input-lg border-0 border-b border-b-gray-700"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input input-ghost w-80 sm:w-120 input-lg border-0 border-b border-b-gray-700"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div className="mt-10">
          <textarea
            name="message"
            placeholder="Message"
            className="textarea textarea-ghost input-lg w-80 sm:w-120 border-0 border-b border-b-gray-700"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-10 w-30 sm:w-40 bg-primary-color text-white text-lg sm:text-xl px-2 py-2 rounded-3xl hover:scale-105 transition-transform duration-300 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
