import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm('service_hmpf9nt', 'template_rtot7m6', form.current, 'Euz5XQWAM9UurEbUs')
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (err) => {
          console.error(err);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full flex-grow flex items-center py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
            03. Contact &amp; Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Let’s build something useful.
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-2">
            Whether you have an upcoming project, are looking to hire a software engineer, or want to discuss applied AI architectures — feel free to get in touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Direct Communication & Channels (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 w-full"
          >
            <div className="surface-card p-5 rounded-xl space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:moharizein09328@gmail.com"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface-subtle text-muted group-hover:text-accent transition-colors">
                    <FaEnvelope className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[11px] text-muted block font-mono">Email</span>
                    <span className="font-medium text-primary break-all">moharizein09328@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/254725803061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface-subtle text-muted group-hover:text-accent transition-colors">
                    <FaWhatsapp className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[11px] text-muted block font-mono">WhatsApp</span>
                    <span className="font-medium text-primary">+254 725 803 061</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamednuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface-subtle text-muted group-hover:text-accent transition-colors">
                    <FaLinkedin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[11px] text-muted block font-mono">LinkedIn</span>
                    <span className="font-medium text-primary">linkedin.com/in/mohamednuru</span>
                  </div>
                </a>

                <a
                  href="https://github.com/MohamedNoorA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface-subtle text-muted group-hover:text-accent transition-colors">
                    <FaGithub className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[11px] text-muted block font-mono">GitHub</span>
                    <span className="font-medium text-primary">github.com/MohamedNoorA</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="surface-card p-4 rounded-xl text-xs text-secondary space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold block">
                Timezone &amp; Availability
              </span>
              <p className="leading-relaxed">
                Based in East Africa Time (EAT / UTC+3), with flexible overlapping hours for clients and teams across US, European, and remote time zones.
              </p>
            </div>
          </motion.div>

          {/* Minimal, Restrained Contact Form (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="surface-card p-5 sm:p-6 rounded-xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="user_name" className="text-xs font-mono text-secondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-primary placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-150"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="user_email" className="text-xs font-mono text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-primary placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-150"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your product, role, or what you are looking to build..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-primary placeholder:text-muted/60 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-150 resize-y"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-primary text-background hover:opacity-90 disabled:opacity-50 transition-all duration-150 shadow-xs"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-background" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {success && (
                    <p className="text-xs font-mono text-emerald-500 font-medium">
                      ✓ Message received. I will reply shortly.
                    </p>
                  )}

                  {error && (
                    <p className="text-xs font-mono text-rose-500 font-medium">
                      ✕ Transmission failed. Please email directly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
