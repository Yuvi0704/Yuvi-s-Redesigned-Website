import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiClock, HiOfficeBuilding, HiBriefcase, HiGlobeAlt, HiDesktopComputer, HiCode, HiShieldCheck, HiAcademicCap } from 'react-icons/hi';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            company: 'TELUS Technician – via ATS',
            role: 'Telecommunication Technician',
            period: 'Current · Full-Time',
            responsibilities: [
                'Install and activate TELUS fibre and telecommunications services.',
                'Configure ONTs, routers, Wi-Fi systems, and customer equipment.',
                'Troubleshoot connectivity, network, and service-related issues.',
                'Perform service testing and quality assurance during installations.',
                'Document technical work and service activities accurately.',
                'Provide customer-facing technical support and guidance.',
            ],
            icon: HiBriefcase,
        },
        {
            company: 'University of Alberta',
            role: 'Master of Internetworking',
            period: '2024 - 2026 (Completed)',
            responsibilities: [
                'Studied routing, switching, network security, and enterprise networking.',
                'Designed and implemented networking labs and infrastructure projects.',
                'Gained hands-on experience with network troubleshooting and protocol analysis.',
                'Applied networking concepts to real-world enterprise scenarios.',
                'Completed advanced coursework in data communications and network architecture.',
            ],
            icon: HiAcademicCap,
        },
        {
            company: 'TELUS Store – via Wish Telecom',
            role: 'Sales Specialist',
            period: 'Part-Time During Studies',
            responsibilities: [
                'Assisted customers with TELUS mobility services, devices, and account solutions.',
                'Processed activations, upgrades, number transfers, and device setups.',
                'Provided technical support and troubleshooting for mobile devices and services.',
                'Recommended products and solutions based on customer needs.',
                'Maintained high customer satisfaction through clear communication and support.',
            ],
            icon: HiBriefcase,
        },
        {
            company: 'Holiday Inn',
            role: 'Night Auditor',
            period: 'Part-Time During Studies',
            responsibilities: [
                'Managed end-of-day audits, financial reconciliation, and revenue reporting.',
                'Handled guest inquiries, late check-ins, and issue resolution in a fast-paced environment.',
                'Maintained operational accuracy and prepared reports for hotel management.',
                'Developed strong problem-solving, communication, and customer service skills.',
                'Balanced work responsibilities while pursuing a Master of Internetworking degree.',
            ],
            icon: HiOfficeBuilding,
        },
        {
            company: 'Staples Canada',
            role: 'Tech Associate',
            period: 'Part-Time During Studies',
            responsibilities: [
                'Assisted customers with computers, printers, accessories and technology products.',
                'Provided product recommendations based on customer needs and budget.',
                'Supported basic technology troubleshooting and customer questions.',
                'Maintained merchandising, inventory and store presentation.',
            ],
            icon: HiDesktopComputer,
        },
        {
            company: 'TELUS – via The Acquisition Group',
            role: 'Senior Marketing Consultant',
            period: 'Part-Time During Studies',
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
            company: 'Karunya University',
            role: 'Bachelor of Computer Science and Engineering',
            period: '2020 – 2024 (Completed)',
            responsibilities: [
                'Built a strong foundation in computer networks, operating systems, programming, and cybersecurity.',
                'Developed academic and research projects in networking, IoT, artificial intelligence, and information security.',
                'Gained hands-on experience with network design, troubleshooting, and system administration concepts.',
                'Published and presented technical projects focused on real-world problem solving and emerging technologies.',
                'Collaborated with teams on software development, research, and engineering projects throughout the program.',
            ],
            icon: HiAcademicCap,
        },
        {
            company: 'Integra Software Services',
            role: 'IT Support Intern',
            period: 'Internship',
            responsibilities: [
                'Assisted users with hardware, software, and basic network troubleshooting.',
                'Supported system maintenance, configuration, and technical issue resolution.',
                'Learned structured IT support and incident management workflows.',
                'Gained exposure to Windows systems, networking fundamentals, and user support.',
                'Collaborated with team members to diagnose and resolve technical problems.',
            ],
            icon: HiDesktopComputer,
        },
    ];

    const education = [];
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

                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
