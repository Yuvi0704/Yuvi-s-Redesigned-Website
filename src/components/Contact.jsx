import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const socialLinks = [
        {
            name: 'Email',
            icon: <HiMail className="w-6 h-6" />,
            link: 'mailto:yuvaraajan07@hotmail.com',
            label: 'yuvaraajan07@hotmail.com',
        },
        {
            name: 'GitHub',
            icon: <FaGithub className="w-6 h-6" />,
            link: 'https://github.com/Yuvi0704',
            label: 'github.com/Yuvi0704',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-6 h-6" />,
            link: 'https://linkedin.com/in/yuvaraajan-e',
            label: 'linkedin.com/in/yuvaraajan-e',
        },
    ];

    return (
        <section id="contact" className="section-container bg-slate-900/30" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact Me</h2>
                <div className="w-24 h-1 bg-primary-500 mb-12 rounded-full"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-primary-300 mb-8 text-center">Connect With Me</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target={social.link.startsWith('mailto:') ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="card flex flex-col items-center gap-4 group p-6 text-center"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <div className="p-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                                    {social.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg mb-1 group-hover:text-primary-300 transition-colors">
                                        {social.name}
                                    </h4>
                                    <p className="text-sm text-gray-400">{social.label}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        className="card text-center p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <h4 className="text-xl font-bold text-white mb-4">Let's Collaborate!</h4>
                        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            I'm always open to discussing new projects and creative ideas to be part of your visions.
                            Feel free to reach out via any of the platforms above or use the live chat widget!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
