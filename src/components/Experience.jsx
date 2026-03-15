import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiClock, HiOfficeBuilding, HiBriefcase, HiGlobeAlt, HiDesktopComputer, HiCode, HiShieldCheck, HiAcademicCap } from 'react-icons/hi';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
         {
            company: 'TELUS Store - via Wish Telecom',
            role: 'Sales Specialist',
            period: 'Current',
            responsibilities: [
               'Delivered consultative sales for TELUS and Koodo mobility plans, smartphones, and accessories.',
                'Processed activations, upgrades, SIM swaps, and number porting through telecom POS systems.',
                  'Consistently met sales targets by identifying customer needs and recommending suitable solutions.',
                  'Educated customers on device features, data plans, and value-added services.',
                  'Maintained high customer satisfaction through clear communication and efficient service.'
            ],
            icon: HiBriefcase,
        },
        {
            company: 'Holiday Inn',
            role: 'Night Auditor',
            period: 'Previous',
            responsibilities: [
                'Manages audits, late check-ins, and escalations calmly.',
                'Balances end-of-day reports, audits folios and closes revenue.',
                'Keeps the property stable at night and prepares for morning teams.',
                'Uses night shifts to study networking, labs and CCNP material.',
            ],
            icon: HiOfficeBuilding,
        },
        {
            company: 'TELUS - via The Acquisition Group',
            role: 'Senior Marketing Consultant',
            period: 'Previous', 
            responsibilities: [
                'Led workshops on sales strategy, motivation and performance.',
                'Conducted hiring interviews and helped recruit qualified reps.',
                'Earned 200+ customer recognition feedbacks for clear service.',
                'Worked across D2D, mall events, community activations and building events.',
                'Completed multiple sales road trips to small cities across Alberta.',
            ],
            icon: HiBriefcase,
        },
        {
            company: 'Cisco (Virtual)',
            role: 'Networking Virtual Internship',
            period: 'Previous',
            responsibilities: [
                'Topology design and connectivity in Cisco Packet Tracer.',
                'Reinforced understanding of packet movement and behavior.',
            ],
            icon: HiGlobeAlt,
        },
        {
            company: 'Integra Pvt Ltd',
            role: 'IT Support Intern',
            period: 'Previous',
            responsibilities: [
                'Troubleshooting systems and network issues.',
                'Learned structured troubleshooting workflows.',
            ],
            icon: HiDesktopComputer,
        },
        {
            company: 'Legends Tech',
            role: 'Web Developer Intern',
            period: 'Previous',
            responsibilities: [
                'HTML/CSS/JavaScript/Node.js projects.',
                'Strengthened practical problem-solving skills.',
            ],
            icon: HiCode,
        },
        {
            company: 'Research Lab',
            role: 'Cybersecurity Intern',
            period: 'Previous',
            responsibilities: [
                'Keylogger project and security concept exploration.',
                'Built foundations in cyber security concepts.',
            ],
            icon: HiShieldCheck,
        },
    ];

    const education = [
        {
            degree: 'MSc Internetworking',
            school: 'University of Alberta, Canada',
            period: 'Current',
            icon: HiAcademicCap,
        },
        {
            degree: 'B.Tech Computer Science & Engineering',
            school: 'Karunya University, India',
            period: 'Completed',
            icon: HiAcademicCap,
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

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="experience" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience & Education</h2>
                <div className="w-24 h-1 bg-primary-500 mb-12 rounded-full"></div>
            </motion.div>

            <motion.div
                className="relative"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block"></div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            variants={cardVariants}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-slate-950 hidden md:block z-10"></div>

                            <div className="md:ml-20">
                                <motion.div
                                    className="card"
                                    whileHover={{ x: 8 }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-primary-500">
                                            {React.createElement(exp.icon, { className: 'w-10 h-10' })}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#f5f5f7' }}>
                                                {exp.company}
                                            </h3>
                                            <p className="text-primary-500 font-semibold mb-2">{exp.role}</p>
                                            <div className="flex items-center gap-2 text-sm" style={{ color: '#86868b' }}>
                                                <HiClock className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <li key={respIndex} className="flex items-start gap-2" style={{ color: '#a1a1a6' }}>
                                                <span className="text-primary-500 mt-1">▹</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-16"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:ml-20" style={{ color: '#f5f5f7' }}>Education</h3>
                    </motion.div>

                    {education.map((edu, index) => (
                        <motion.div
                            key={`edu-${index}`}
                            className="relative"
                            variants={cardVariants}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-slate-950 hidden md:block z-10"></div>

                            <div className="md:ml-20">
                                <motion.div
                                    className="card"
                                    whileHover={{ x: 8 }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-primary-500">
                                            {React.createElement(edu.icon, { className: 'w-10 h-10' })}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary-400 font-semibold mb-2">{edu.school}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <HiClock className="w-4 h-4" />
                                                <span>{edu.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
