import React from 'react';

const Logo = ({ className = "h-8 w-auto" }) => {
    return (
        <svg
            viewBox="0 0 132 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="132" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#0071e3" />
                </linearGradient>
            </defs>

            {/* y */}
            <path
                d="M10 8 L 22 24"
                stroke="url(#logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M34 8 L 10 36"
                stroke="url(#logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* u */}
            <path
                d="M50 14 L 50 30 Q 50 36 58 36 Q 66 36 66 30 L 66 14"
                stroke="url(#logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* v */}
            <path
                d="M82 14 L 90 36 L 98 14"
                stroke="url(#logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* i */}
            <path
                d="M114 14 L 114 36"
                stroke="url(#logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="114" cy="6" r="4" fill="url(#logo-gradient)" />

        </svg>
    );
};

export default Logo;
