'use client'

import { useState } from 'react'
import { about } from '@/data'
import Subheading from '../common/Subheading'
import Text from '../common/Text'
import { FaGraduationCap, FaPeopleGroup, FaCheck } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import WithBackground from '../decorations/WithBackground'

const iconMap = {
    FaGraduationCap,
    FaPeopleGroup
}

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="default-container space-y-4">
                <Subheading className="max-w-[800px]">
                    Supercharge your app instantly, launch faster, make $
                </Subheading>
                <Text>
                    Login users, process payments and send emails at lightspeed. 
                    Spend your time building your startup, not integrating APIs. 
                    ShipFast provides you with the boilerplate code you need to launch, FAST.
                </Text>
            </div>

            {/* Category Selection */}
            <div className="default-container flex flex-wrap gap-6">
                {about.map((item, index) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap]
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center space-x-2 transition-colors duration-200
                                ${activeIndex === index 
                                    ? 'text-blue-600' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                        </button>
                    )
                })}
            </div>
            
            {/* Content Points */}
            <WithBackground color="#F1F1F1" tiltDegree={-2} borderHeight={40}>
                <div className="py-20">
                    <div className="default-container space-y-4">
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
                                        <FaCheck className="w-4 h-4 text-header mt-1 flex-shrink-0" />
                                        <p className='dynamic-text'>{point}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </WithBackground>
        </div>
    )
}

export default About