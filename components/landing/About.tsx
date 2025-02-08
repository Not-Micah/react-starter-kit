"use client";

import { useState } from 'react'
import { about } from '@/data'
import Subheading from '../common/Subheading'
import Text from '../common/Text'
import { FaGraduationCap, FaPeopleGroup, FaCheck } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * About section showcasing key features and benefits.
 * Includes interactive category selection and animated content.
 */
const iconMap = {
    FaGraduationCap,
    FaPeopleGroup
}

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="relative space-y-6">
            {/* Header Section */}
            <div className="default-container relative space-y-3">
                <Subheading className="max-w-[800px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                    Supercharge your app instantly, launch faster, make $
                </Subheading>
                <Text className="text-gray-500 max-w-2xl">
                    Login users, process payments and send emails at lightspeed. 
                    Spend your time building your startup, not integrating APIs. 
                    ShipFast provides you with the boilerplate code you need to launch, FAST.
                </Text>
            </div>

            {/* Category Selection */}
            <div className="default-container flex flex-wrap gap-3">
                {about.map((item, index) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap]
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                flex items-center space-x-2.5 px-4 py-2 
                                rounded-lg transition-all duration-200
                                ${activeIndex === index 
                                    ? 'bg-blue-50 text-blue-600' 
                                    : 'hover:bg-gray-50 text-gray-500 hover:text-gray-900'
                                }
                            `}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="font-medium text-base">{item.title}</span>
                        </button>
                    )
                })}
            </div>
            
            {/* Content Points */}
            <div className="py-8 bg-gray-50">
                <div className="default-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="grid gap-3 lg:grid-cols-3"
                        >
                            {about[activeIndex].points.map((point, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/80 transition-colors duration-200"
                                >
                                    <div className="flex-shrink-0">
                                        <FaCheck className="w-3.5 h-3.5 text-blue-500" />
                                    </div>
                                    <Text className="text-base text-gray-500 truncate">
                                        {point}
                                    </Text>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default About