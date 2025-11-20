import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiKey, HiLockClosed, HiLightningBolt, HiChip, HiShieldCheck } from 'react-icons/hi';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'Keylogger Analysis',
            description: 'Explored how keyloggers hook into inputs and hide on systems. Focus on persistence, stealth and impact on users.',
            tags: ['Security', 'Malware', 'Research'],
            icon: HiKey,
        },
        {
            title: 'Integration of Triple DES Encryption and Visual Cryptography',
            description: 'Enhancing digital content security by combining Triple DES encryption with Visual Cryptography to protect content. Flows built for secure but simple sharing.',
            tags: ['Cryptography', 'Security', 'Python'],
            icon: HiLockClosed,
        },
        {
            title: 'Traffic Disobeying Control System',
            description: 'Arduino + GSM + RFID to detect traffic rule violations. IoT-based system for automated enforcement.',
            tags: ['IoT', 'Arduino', 'GSM', 'RFID'],
            icon: HiLightningBolt,
        },
        {
            title: 'Anomaly of Student Behaviour Inside Campus',
            description: 'AI system to monitor and classify student behaviour inside campus. Machine learning applied to behavioral analysis with real-time alerts.',
            tags: ['AI', 'Machine Learning', 'IoT', 'Facial Recognition'],
            icon: HiChip,
        },
        {
            title: 'Windows 10 Hacking with Metasploit',
            description: 'Analysis of Windows 10 Metasploit payload execution. Studied attack vectors, privilege escalation and detection mechanisms.',
            tags: ['Security', 'Metasploit', 'Penetration Testing'],
            icon: HiShieldCheck,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="projects" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
                <div className="w-24 h-1 bg-primary-500 mb-12 rounded-full"></div>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {projects.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                        <motion.div
                            key={index}
                            className="card group"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#f5f5f7' }}>
                                {project.title}
                            </h3>
                            <p className="mb-4" style={{ color: '#a1a1a6' }}>{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-500 rounded-full border border-primary-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Projects;
