'use client'

import { useState } from 'react'
import { FAQs } from '@/data'
import Subheading from '../common/Subheading'
import Text from '../common/Text'
import { IoAdd } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
    // Track which FAQ item is currently open
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="default-container">
            <div className="grid xl:grid-cols-[40%_60%] lg:grid-cols-[40%_60%] gap-8">
                {/* Left Column - Header Section */}
                <div className="space-y-4">
                    <Subheading>Frequently Asked Questions</Subheading>
                    <Text>
                        Have another question? Contact me on Twitter or by email.
                    </Text>
                </div>

                {/* Right Column - FAQ Items */}
                <div className="space-y-2">
                    {FAQs.map((faq, index) => (
                        <div key={index}>
                            {/* FAQ Question Header */}
                            <div
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`flex justify-between items-center space-x-4 py-4 cursor-pointer border-t border-gray-200 ${
                                    activeIndex === index ? 'text-primary' : 'text-gray-900'
                                }`}
                            >
                                <Text className="font-medium">
                                    {faq.question}
                                </Text>
                                
                                {/* Animated Icon - rotates 45deg to form a "+" or "-" */}
                                <div
                                    className={`transition-transform duration-200 ${
                                        activeIndex === index ? 'rotate-45' : 'rotate-0'
                                    }`}
                                >
                                    <IoAdd className="w-5 h-5" />
                                </div>
                            </div>
                            
                            {/* Animated Answer Section */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <Text className="pb-4 text-gray-600">
                                            {faq.answer}
                                        </Text>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ