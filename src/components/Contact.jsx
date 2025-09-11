import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';
import FloatingLabelInput from './FloatingLabelInput';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs.sendForm('service_hmpf9nt', 'template_rtot7m6', form.current, 'Euz5XQWAM9UurEbUs')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          form.current.reset(); // Clear form fields
      }, (error) => {
          console.log(error.text);
          setError(true);
          setLoading(false);
      });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.section
      id="contact"
      className="bg-background flex-grow flex items-center"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text-color mb-4">Let's Connect</h2>
        <p className="text-center text-text-color text-lg mb-12 max-w-2xl mx-auto">
          I’m always open to new opportunities and collaborations. Feel free to reach out, and I’ll respond as soon as possible.
        </p>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <FloatingLabelInput label="Name" type="text" name="user_name" required={true} />
              <FloatingLabelInput label="Email" type="email" name="user_email" required={true} />
              <FloatingLabelInput label="Message" isTextArea={true} name="message" rows="6" required={true} />
              
              <motion.button
                type="submit"
                className="bg-primary-green text-white font-bold py-3 px-8 rounded-full hover:bg-dark-green transition duration-300 flex items-center justify-center"
                disabled={loading}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              
              <AnimatePresence>
                {success && (
                  <motion.p
                    className="text-primary-green mt-4"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {error && (
                  <motion.p
                    className="text-accent-red mt-4"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    Failed to send message. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
            <div className="bg-background p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-text-color mb-4">Contact Information</h3>
              <p className="text-text-color mb-3 flex items-center"><FaEnvelope className="mr-3 text-primary-green" /> <span className="font-semibold">Email:</span> moharizein09328@gmail.com</p>
              <p className="text-text-color mb-3 flex items-center"><FaGithub className="mr-3 text-primary-green" /> <span className="font-semibold">GitHub:</span> <a href="https://github.com/MohamedNoorA" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">MohamedNoorA</a></p>
              <p className="text-text-color mb-3 flex items-center"><FaGlobe className="mr-3 text-primary-green" /> <span className="font-semibold">Portfolio:</span> <a href="https://mohamednoora.github.io" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">mohamedNoorA.github.io</a></p>
              <p className="text-text-color mb-3 flex items-center"><FaLinkedin className="mr-3 text-primary-green" /> <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/mohamednuru" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">linkedin.com/in/mohamednuru</a></p>
              <p className="text-text-color mb-3 flex items-center"><FaWhatsapp className="mr-3 text-primary-green" /> <span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/254725803061" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">+254 725803061</a></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
