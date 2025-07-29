'use client';

import { useState } from 'react';
import { Button, Input, Textarea, Heading, Flex, Text } from '@radix-ui/themes';

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

    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Thank you for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[var(--color-contact-bg)] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Heading as="h2" size="8" className="text-center text-[var(--color-accent)] mb-12">
          Get in Touch
        </Heading>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-xl mx-auto"
          aria-label="Contact form"
          noValidate
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Your name"
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Your email address"
          />

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Your message"
          />

          <Flex justify="center">
            <Button type="submit" size="4" radius="large" color="violet">
              Send Message
            </Button>
          </Flex>

          {status && (
            <Text size="3" className="text-center text-[var(--color-primary)] mt-4" role="alert">
              {status}
            </Text>
          )}
        </form>
      </div>
    </section>
  );
}
