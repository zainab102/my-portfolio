'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your message...');

    // Simulate API call delay
    setTimeout(() => {
      setStatus('Thank you for reaching out! I will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email Me',
      description: 'Drop me a line anytime',
      contact: 'zainab@example.com',
      link: 'mailto:zainab@example.com',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      iconColor: 'text-blue-600',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      description: 'Connect professionally',
      contact: 'Zainab Tariq',
      link: 'https://linkedin.com/in/zainab-22243b366',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      textColor: 'text-cyan-900',
      iconColor: 'text-cyan-600',
    },
  ];

  // Generate stable random positions and animation timings for butterflies only once
  // outside of render to avoid hydration mismatches
  // We do this by precomputing an array of butterfly styles once here
  const butterflyStyles = [
    {
      left: '55.9%',
      top: '86.3%',
      animationDelay: '0s',
      animationDuration: '21.08s',
    },
    {
      left: '73.9%',
      top: '33.0%',
      animationDelay: '5s',
      animationDuration: '18.43s',
    },
    {
      left: '6.7%',
      top: '43.1%',
      animationDelay: '10s',
      animationDuration: '20.17s',
    },
    {
      left: '84.2%',
      top: '84.1%',
      animationDelay: '15s',
      animationDuration: '18.92s',
    },
  ];

  return (
    <section
      id="contact"
      className="bg-contact text-gray-900 py-24 px-6 md:px-12 relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {butterflyStyles.map((style, i) => (
          <div
            key={`contact-butterfly-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: style.left,
              top: style.top,
              animationDelay: style.animationDelay,
              animationDuration: style.animationDuration,
            }}
          >
            <div className="text-lg animate-wing-flutter filter drop-shadow-sm">
              🦋
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-4 font-medium">
              I'd love to hear from you! Whether you have a
              <span className="font-bold text-amber-700"> project idea</span>,
              <span className="font-bold text-rose-700"> collaboration opportunity</span>
              , or just want to
              <span className="font-bold text-purple-700"> say hello</span> —
              let's start a conversation.
            </p>
            <p className="text-lg text-gray-600">
              I'm always excited to discuss new opportunities and connect with
              fellow creators and innovators.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
              <h3 className="text-3xl font-black text-gray-800 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-white" size={20} />
                </div>
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration / General Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-y disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed light-shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="mr-3" />
                      Send Message
                    </>
                  )}
                </button>

                {status && (
                  <div
                    className={`text-center p-4 rounded-xl font-semibold ${
                      status.includes('Thank you')
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
              <h3 className="text-3xl font-black text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block"
                  >
                    <div
                      className={`bg-gradient-to-r ${method.bgColor} border-2 ${method.borderColor} rounded-2xl p-6 hover:scale-105 transition-all duration-300 light-shadow hover:light-shadow-lg`}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center light-shadow group-hover:scale-110 transition-transform">
                            <method.icon className={method.iconColor} size={24} />
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className={`text-lg font-black ${method.textColor} mb-1`}>
                            {method.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                          <p className={`font-bold ${method.textColor} text-sm`}>{method.contact}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time & Availability */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 text-white light-shadow-xl">
              <h3 className="text-2xl font-black text-center text-amber-400 mb-6">
                Response & Availability
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-bold text-green-400 mb-2">Quick Response</h4>
                  <p className="text-gray-300 text-sm">Usually respond within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-400 mb-2">Global Availability</h4>
                  <p className="text-gray-300 text-sm">Open to remote collaboration worldwide</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-300">
                    Currently available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
              <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">Follow My Journey</h3>
              <div className="grid grid-cols-2 gap-6">
                <a
                  href="https://github.com/zainab102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:from-white hover:to-gray-50 hover:border-gray-300 transition-all duration-300 text-center light-shadow hover:light-shadow-lg hover:scale-105"
                >
                  <FaGithub className="text-4xl text-gray-700 mx-auto mb-3 group-hover:text-gray-900 transition-colors" />
                  <h4 className="font-bold text-gray-800">GitHub</h4>
                  <p className="text-gray-600 text-sm">View my code</p>
                </a>

                <a
                  href="https://linkedin.com/in/zainab-22243b366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-300 text-center light-shadow hover:light-shadow-lg hover:scale-105"
                >
                  <FaLinkedin className="text-4xl text-blue-600 mx-auto mb-3 group-hover:text-blue-700 transition-colors" />
                  <h4 className="font-bold text-blue-900">LinkedIn</h4>
                  <p className="text-blue-700 text-sm">Professional network</p>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-xl hover:shadow-2xl"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}