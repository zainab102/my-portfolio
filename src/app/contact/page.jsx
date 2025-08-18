'use client';

import { useState } from 'react';
import { Button } from '@radix-ui/themes';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation could be added here if needed

    setStatus('Sending...');

    // Simulate API call delay
    setTimeout(() => {
      setStatus('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-[var(--color-contact-bg)] text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[var(--color-accent)] mb-12">
          Get in Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-xl mx-auto"
          aria-label="Contact form"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Your name"
            className="bg-gray-100 text-gray-900 p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Your email address"
            className="bg-gray-100 text-gray-900 p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Your message"
            className="bg-gray-100 text-gray-900 p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition duration-300 resize-y"
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              size="4"
              radius="large"
              color="violet"
              className="w-full md:w-auto px-6 py-3"
            >
              Send Message
            </Button>
          </div>

          {status && (
            <p
              className="text-center text-[var(--color-primary)] mt-4"
              role="alert"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
