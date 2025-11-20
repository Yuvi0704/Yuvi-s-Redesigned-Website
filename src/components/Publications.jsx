import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiExternalLink, HiAcademicCap } from 'react-icons/hi';

const Publications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const publications = [
        {
            title: 'Ambulance Intimation System Using Long-Range (LoRa) Module',
            conference: 'National Conference on Innovative Research and Advanced Computing',
            description: 'Developed a LoRa-based system to detect ambulances for efficient traffic management. Awarded Best Paper at the National Conference on Innovative Research and Advanced Computing.',
            award: '🏆 Best Paper Award',
            tags: ['LoRa', 'IoT', 'Traffic Management'],
            type: 'Conference',
        },
        {
            title: 'Monitorization of Student Behaviour Inside Campus',
            conference: 'Conference Work',
            description: 'Developed a surveillance and analytics system to monitor student activities and behavioral trends on campus, aiming to improve safety and administrative insights. Involved IoT devices, facial recognition, and real-time alerting.',
            tags: ['IoT', 'Facial Recognition', 'Analytics', 'Surveillance'],
            type: 'Conference',
        },
        {
            title: 'A RAG-based Medical Assistant Especially for Infectious Diseases',
            conference: 'IEEE Xplore',
            description: 'RAG-based medical assistant focused on infectious diseases.',
            link: 'https://ieeexplore.ieee.org/document/10544639',
            reference: 'ref: 10544639',
            tags: ['AI', 'RAG', 'Healthcare', 'NLP'],
            type: 'IEEE',
        },
        {
            title: 'Know Your Bus',
            conference: 'IEEE Xplore',
            description: 'Smart bus information system with real-time awareness.',
            link: 'https://ieeexplore.ieee.org/document/10925667',
            reference: 'ref: 10925667',
            tags: ['IoT', 'Real-time', 'Smart City'],
            type: 'IEEE',
        },
        {
            title: 'Traffic Disobeying Control System',
            conference: 'Conference Work',
            description: 'Automated system for detecting and managing traffic rule violations.',
            tags: ['IoT', 'Computer Vision', 'Traffic'],
            type: 'Conference',
        },
        {
            title: 'Analog Clock-Based Smartphone Authentication',
            conference: 'Conference Work',
            description: 'Novel authentication mechanism using analog clock patterns for smartphone security.',
            tags: ['Security', 'Authentication', 'Mobile'],
            type: 'Conference',
        },
        {
            title: 'Digital Content Security using Triple DES & Visual Cryptography',
            conference: 'Conference Work',
            description: 'Hybrid approach combining Triple DES encryption with Visual Cryptography for enhanced content protection.',
            tags: ['Cryptography', 'Security', 'Encryption'],
            type: 'Conference',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="publications" className="section-container bg-slate-900/30" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Publications</h2>
                <div className="w-24 h-1 bg-primary-500 mb-12 rounded-full"></div>
            </motion.div>

            <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {publications.map((pub, index) => (
                    <motion.div
                        key={index}
                        className="card group"
                        variants={cardVariants}
                        whileHover={{ x: 8 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                    <HiAcademicCap className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                                        {pub.title}
                                    </h3>
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
                                        >
                                            <span className="text-sm">View Paper</span>
                                            <HiExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-accent-400 mb-2">{pub.conference}</p>
                                {pub.award && (
                                    <p className="text-sm font-semibold text-yellow-400 mb-2">{pub.award}</p>
                                )}
                                {pub.reference && (
                                    <p className="text-xs text-gray-500 mb-2">{pub.reference}</p>
                                )}
                                <p className="text-gray-400 mb-3 leading-relaxed">{pub.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {pub.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Publications;
