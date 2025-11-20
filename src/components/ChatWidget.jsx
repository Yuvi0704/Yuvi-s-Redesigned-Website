import React from 'react';
import { motion } from 'framer-motion';

const ChatWidget = () => {
    const toggleChat = () => {
        if (window.Tawk_API) {
            window.Tawk_API.toggle();
        }
    };

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50 cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleChat}
        >
            <div className="relative group">
                {/* Pulse effect */}
                <div className="absolute -inset-1 bg-primary-500 rounded-full opacity-75 group-hover:opacity-100 blur animate-pulse"></div>

                {/* Profile Image */}
                <img
                    src="/profile.jpg"
                    alt="Chat with me"
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                />

                {/* Status Indicator */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
            </div>
        </motion.div>
    );
};

export default ChatWidget;
