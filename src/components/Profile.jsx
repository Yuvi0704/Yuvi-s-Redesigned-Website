import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiGlobeAlt, HiBeaker, HiAcademicCap, HiLightBulb, HiTrendingUp, HiCode } from 'react-icons/hi';

const Profile = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const highlights = [
        {
            icon: HiGlobeAlt,
            text: 'Routing, switching, subnetting, IPv4/IPv6 design, network security, ACLs, OSPF basics, port security.',
        },
        {
            icon: HiBeaker,
            text: 'Lab building, packet analysis, protocol behaviour—documenting labs and configs daily.',
        },
        {
            icon: HiCode,
            text: 'Completed CCNP ENCOR. Learning daily, always improving.',
        },
        {
            icon: HiLightBulb,
            text: 'Helping small businesses with web, SEO and AI automation—finding practical fixes.',
        },
        {
            icon: HiTrendingUp,
            text: 'Open to junior networking roles in Alberta. Ready to contribute and grow.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section id="profile" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-600 to-primary-500 mb-12 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Image Placeholder */}
                <motion.div
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-30"></div>
                        <div className="relative glass p-4 rounded-2xl">
                            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary-500/50 shadow-lg shadow-primary-500/20">
                                <img
                                    src="/profile.jpg"
                                    alt="Yuvaraajan - Professional Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Profile Content */}
                <motion.div
                    className="order-1 md:order-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.p
                        className="text-lg text-gray-300 mb-8 leading-relaxed"
                        variants={itemVariants}
                    >
                        Bridging academic theory with reproducible labs. Thinking in packets, timers and state machines. Building a foundation for networking, OS and programming.
                    </motion.p>

                    <div className="space-y-4">
                        {highlights.map((highlight, index) => {
                            const IconComponent = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="card flex items-start gap-4"
                                    variants={itemVariants}
                                >
                                    <div className="text-3xl text-primary-500">
                                        <IconComponent className="w-8 h-8" />
                                    </div>
                                    <p className="text-gray-300 flex-1">{highlight.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Profile;
