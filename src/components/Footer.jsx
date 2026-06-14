import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="w-5 h-5" />,
            link: 'https://github.com/Yuvi0704',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-5 h-5" />,
            link: 'https://linkedin.com/in/yuvaraajan-e',
        },
        {
            name: 'Email',
            icon: <FaEnvelope className="w-5 h-5" />,
            link: 'mailto:yuvaraajan07@hotmail.com',
        },
    ];

    return (
        <motion.footer
            className="bg-black border-t border-white/10 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p style={{ color: '#86868b' }} className="text-sm">
                    © {currentYear} YUVARAAJAN E. All rights reserved.
                </p>

                <div className="flex gap-6">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target={social.link.startsWith('mailto:') ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-500 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
