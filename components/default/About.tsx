'use client'

import { useState } from 'react'
import { about } from '@/data'
import Subheading from './Subheading'
import Text from './Text'
import { FaGraduationCap, FaPeopleGroup, FaCheck } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'

// Map of icon strings to actual icon components
const iconMap = {
    FaGraduationCap,
    FaPeopleGroup
}

const About = () => {
    // Default to first option (Highschool Student)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
                <Subheading>
                    Supercharge your app instantly, launch faster, make $
                </Subheading>
                <Text>
                    Login users, process payments and send emails at lightspeed. 
                    Spend your time building your startup, not integrating APIs. 
                    ShipFast provides you with the boilerplate code you need to launch, FAST.
                </Text>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4">
                {about.map((item, index) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap]
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                                ${activeIndex === index 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.title}</span>
                        </button>
                    )
                })}
            </div>

            {/* Points Section with Animation */}
            <div className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                    >
                        {about[activeIndex].points.map((point, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <FaCheck className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                <Text>{point}</Text>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default About