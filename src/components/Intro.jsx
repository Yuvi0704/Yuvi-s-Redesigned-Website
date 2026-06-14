import React from 'react';
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const Intro = () => {
    const scrollToProfile = () => {
        document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >


                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text text-glow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            YUVARAAJAN E
                        </motion.h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Telecommunication Technician @ TELUS – via ATS     <br /> Master of Internetworking @ University of Alberta
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        I enjoy turning messy problems—like confusing network topologies, broken systems, or chaotic sales days—into clean, calm, repeatable systems: clear documentation, structured labs, organized workflows, and practical solutions that teams can actually use.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.button
                            className="btn-primary text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Projects
                        </motion.button>
                        <motion.button
                            className="btn-secondary text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                if (window.Tawk_API) window.Tawk_API.maximize();
                            }}
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        onClick={scrollToProfile}
                    >
                        <HiChevronDown className="w-8 h-8 text-primary-400" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
