import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiGlobeAlt, HiCog, HiCode, HiShieldCheck, HiStar } from 'react-icons/hi';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Networking & Certifications',
            icon: HiGlobeAlt,
            skills: [
                'CCNP ENCOR & ENSARI – ongoing (foundation from CCNA)',
                'VLAN design, trunking, inter-VLAN routing',
                'Static routes, OSPF basics, ACLs and port security',
                'IPv4/IPv6 addressing, subnetting and summarisation',
            ],
        },
        {
            title: 'Tools & Technologies',
            icon: HiCog,
            skills: [
                'Cisco Packet Tracer for quick ideas and practice',
                'Learning containerlab / GNS3 for advanced CCNP labs',
                'Wireshark for packet inspection and protocol behaviour',
                'Linux CLI (Kali, Ubuntu) for security testing',
            ],
        },
        {
            title: 'Programming & Development',
            icon: HiCode,
            skills: [
                'Python for automation and parsing outputs',
                'C exposure from systems and Internet security',
                'HTML, CSS, JavaScript, Node.js and web apps',
                'AI tools for planning, docs and acceleration',
            ],
        },
        {
            title: 'Security & Cloud',
            icon: HiShieldCheck,
            skills: [
                'Keylogger and exploit-style labs',
                'Metasploit practice on controlled Windows 10 labs',
                'AWS Cloud Practitioner / Technical Essentials',
                'Cybersecurity Basics – IBM',
            ],
        },
        {
            title: 'Other Skills',
            icon: HiStar,
            skills: [
                'SEO basics: structure, copy and on-page tweaks',
                'Open Source Networking Technologies',
                'Blockchain Essentials',
                'Documentation and technical writing',
            ],
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
        <section id="skills" className="section-container bg-slate-900/30" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills</h2>
                <div className="w-24 h-1 bg-primary-500 mb-12 rounded-full"></div>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {skillCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                        <motion.div
                            key={index}
                            className="card group"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="text-primary-500 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary-300">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skillIndex}
                                        className="text-gray-400 flex items-start gap-2"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <span className="text-primary-400 mt-1">▹</span>
                                        <span>{skill}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Skills;
